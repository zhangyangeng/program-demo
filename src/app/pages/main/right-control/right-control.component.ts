import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-right-control',
  templateUrl: './right-control.component.html',
  styleUrls: ['./right-control.component.scss']
})
export class RightControlComponent implements OnInit {

  // 获取子组件
  @ViewChild(TodoComponent) public todoList!: TodoComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // 调用子组件的 add() 方法
  add(title: string){
    this.todoList.add(title);
  }

}
