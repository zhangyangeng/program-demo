import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { USERNAME } from 'src/app/services/local-storage/local-storage.namespace';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.scss']
})
export class LeftControlComponent implements OnInit {

  @Input() isCollapsed!: boolean;
  // 调用子组件的方法
  @ViewChild(ListComponent) listComponent!: ListComponent;
  username!: string;

  constructor(
    // 注入服务
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    // 获取本地存储中的用户信息
    this.username = this.localStorage.get(USERNAME)
  }

  openAddListModal(): void{
    // 让 Angular 调用子组件
    this.listComponent.openAddListModal();
  }
}
