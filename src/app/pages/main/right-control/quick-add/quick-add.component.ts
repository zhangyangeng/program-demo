import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.scss']
})
export class QuickAddComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(title: string){
    if(title){
      this.add.next(title);
    }
  }

}
