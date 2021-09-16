import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Todo } from 'src/domain/entities';
import { floorToDate, floorToMinute, getCurrentTime, getTodayTime, lessThanADay } from 'src/utils/time';
import { NzMessageService } from 'ng-zorro-antd/message';
import { detailTransition } from './detail.animation';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [detailTransition]
})
export class DetailComponent implements OnInit {

  // 绑定动画
  @HostBinding('@detailTransition') state = 'activated';

  private trueSource!: Todo;
  currentTodo!: Todo;
  dueDate!: Date;
  planDate!: Date;

  dueDisabledDate = (d: Date): boolean => floorToDate(d) < getTodayTime();
  planDisabledDate = (d: Date): boolean => floorToMinute(d) < getCurrentTime();

  constructor(
    // 注入服务
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(first()).subscribe((paramsMap: ParamMap) => {
      const id = paramsMap.get('id');
      const todo = this.todoService.getByUUID(id!);
      this.trueSource = todo!;
      this.currentTodo = Object.assign({}, todo) as Todo;
      if(todo?.dueAt){
        this.dueDate = new Date(todo.dueAt);
      }
      if(todo?.planAt){
        this.planDate = new Date(todo.planAt);
      }
    })
  }

  // 处理截止日期修改
  handleDueDateChange(date: Date): void{
    const dueAt = date ? date.getTime() : undefined;
    this.currentTodo.dueAt = dueAt!;
    if(dueAt && lessThanADay(dueAt)){
      this.message.warning('项目将会在24小时内到期', {
        nzDuration: 6000
      })
    }
  }

  // 处理计划日期修改
  handlePlanDateChange(date: Date): void{
    const t = date ? date.getTime() : undefined;
    if(!t){
      this.currentTodo.notifyMe = false;
    }
    this.currentTodo.planAt = t!;
    this.checkDate();
  }

  private checkDate(): void{
    const { dueAt, planAt } = this.currentTodo;
    if(dueAt && planAt && floorToDate(planAt) > dueAt){
      this.message.warning('你确定要在到期之后才开始做这个项目吗？', {
        nzDuration: 6000
      })
    }
  }

  // 开关点击触发
  clickSwitch(): void{
    if(this.currentTodo.completedFlag){
      return;
    }
    if(!this.currentTodo.planAt){
      this.message.warning('尚未设置计划日期');
      return;
    }
    this.currentTodo.notifyMe = !this.currentTodo.notifyMe;
  }

  confirm(): void{
    this.todoService.update(this.currentTodo);
    this.goBack();
  }

  cancel(): void{
    this.todoService.delete(this.currentTodo._id);
    this.goBack();
  }

  goBack(): void{
    this.router.navigateByUrl('main');
  }
}
