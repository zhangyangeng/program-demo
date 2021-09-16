import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ListService } from 'src/app/services/list/list.service';
import { TodoService } from 'src/app/services/todo/todo.service';
import { List, Todo } from 'src/domain/entities';
import { RankBy } from 'src/domain/type';
import { floorToDate, getTodayTime } from 'src/utils/time';

const rankerGenerator = (type: RankBy = 'title'): any => {
  if(type === 'completeFlag'){
    return (t1: Todo, t2: Todo) => t1.completedFlag && !t2.completedFlag ? 1 : -1;
  }
  return (t1: Todo, t2: Todo) => t1[type] > t2[type];
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();
  private dropdown!: NzDropdownMenuComponent;

  todos: Todo[] = [];
  lists: List[] = [];
  currentContextTodo!: Todo;

  constructor(
    // 注入服务
    private listService: ListService,
    private todoService: TodoService,
    private router: Router,
    private dropdownService: NzContextMenuService
  ) { }

  ngOnInit(): void {
    this.listService.lists$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lists => {
        this.lists = lists;
        console.log(this.lists)
      })

    combineLatest(this.listService.currentUuid$, this.todoService.todo$, this.todoService.rank$)
      .pipe(takeUntil(this.destroy$))
      .subscribe(sources => {
        this.processTodos(sources[0], sources[1], sources[2]);
      })

    this.todoService.getAll();
    this.listService.getAll();
  }

  ngOnDestroy(){
    this.destroy$.next();
  }

  private processTodos(listUUID: string, todos: Todo[], rank: RankBy): void{
    const filteredTodos = todos
      .filter(todo => {
        return ((listUUID === 'today' && todo.planAt && floorToDate(todo.planAt) <= getTodayTime()) || (listUUID === 'todo' && (!todo.listUUID || todo.listUUID === 'todo')) || (listUUID === todo.listUUID));
      })
      .map(todo => Object.assign({}, todo) as Todo)
      .sort(rankerGenerator(rank));

    this.todos = [].concat(filteredTodos as []);
    // console.log(this.todos)
  }

  add(title: string): void{
    this.todoService.add(title);
  }

  click(uuid: string): void {
    this.router.navigateByUrl(`/main/${uuid}`);
  }

  // 右键菜单
  contextMenu($event: MouseEvent, template: NzDropdownMenuComponent, uuid: string): void{
    this.dropdown = this.dropdownService.create($event, template)!;
    this.currentContextTodo = this.todos.find(t => t._id === uuid)!;
  }

  listsExcept(listUUID: string): List[]{
    return this.lists.filter(l => l._id !== listUUID);
  }

  toggle(uuid: string): void{
    this.todoService.toggleTodoComplete(uuid);
  }

  delete(): void{
    this.todoService.delete(this.currentContextTodo._id);
  }

  setToday(): void{
    this.todoService.setTodoToday(this.currentContextTodo._id);
    console.log(this.currentContextTodo)
  }

  moveToList(listUuid: string): void{
    this.todoService.moveToList(this.currentContextTodo._id, listUuid);
  }

  close(): void{
    this.dropdownService.close();
  }
}
