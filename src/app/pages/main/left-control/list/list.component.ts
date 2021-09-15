import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ListService } from 'src/app/services/list/list.service';
import { List } from 'src/domain/entities';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { TodoService } from 'src/app/services/todo/todo.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() isCollapsed!: boolean;


  value: string = '';
  renameValue: string = '';
  lists!: List[];
  currentListUuid!: string;
  contextListUuid!: string;
  addListModalVisible = false;
  renameListModalVisible = false;
  private dropdown!: NzDropdownMenuComponent;
  private destroy$ = new Subject();

  constructor(
    // 注入服务
    private dropdownService: NzContextMenuService,
    private listService: ListService,
    private todoService: TodoService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.listService.lists$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lists => {
        this.lists = lists
      });

    this.listService.currentUuid$
      .pipe(takeUntil(this.destroy$))
      .subscribe(uuid => {
        this.currentListUuid = uuid;
      })
    // 获取当前所有列表
    this.listService.getAll();
  }

  ngOnDestroy(){
    this.destroy$.next();
  }

  // 打开新列表的模态框
  openAddListModal(): void{
    this.addListModalVisible = true;
  }
  // 关闭新列表的模态框
  closeAddListModal(): void{
    this.addListModalVisible = false;
  }
  // 打开重命名的模态框
  openRenameListModal(): void {
    this.renameListModalVisible = true;
    setTimeout(() => {
      const title = this.lists.find(l => l._id === this.contextListUuid)?.title;
      console.log(title);
      this.renameValue = title!;
    });
  }
  // 关闭重命名的模态框
  closeRenameListModal(): void{
    this.renameListModalVisible = false;
  }
  // 添加列表
  add(title: string): void{
    this.listService.add(title);
    console.log(title);
    this.closeAddListModal();
  }
  // 点击用户自定义列表触发
  click(uuid: string): void{
    this.listService.setCurrentUuid(uuid);
  }
  // 重命名列表
  rename(title: string): void {
    this.listService.rename(this.contextListUuid, title);
    this.closeRenameListModal();
  }
  // 用户自定义列表的右键菜单
  contextMenu($event: MouseEvent, template: NzDropdownMenuComponent, uuid: string): void{
    this.dropdown = this.dropdownService.create($event, template)!;
    this.contextListUuid = uuid;
  }
  // 删除列表
  delete(): void {
    const uuid = this.contextListUuid;
    this.modal.confirm({
      nzTitle: '删除列表',
      nzContent: '该操作会导致该列表下的所有待办事项被删除，请确认是否继续？',
      nzOnOk: () =>
        new Promise<void>((res, rej) => {
          this.listService.delete(uuid);
          this.todoService.deleteInList(uuid);
          res();
        }).catch(() => console.error('Delete list failed'))
    });
  }
}
