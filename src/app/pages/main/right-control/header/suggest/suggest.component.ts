import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Todo } from 'src/domain/entities';
import { floorToDate, getTodayTime, ONE_DAY } from 'src/utils/time';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit, OnDestroy {

  suggestedTodo: Todo[] = [];

  private todo$!: Subscription;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todo$ = this.todoService.todo$.subscribe(todos => {
      const filtered = todos.filter(t => {
        if(t.planAt && floorToDate(t.planAt) <= getTodayTime()){
          return false;
        }
        if(t.dueAt && t.dueAt - getTodayTime() <= ONE_DAY * 2){
          return true
        }
        return false
      })
      this.suggestedTodo = [].concat(filtered as []);
    })

    this.todoService.getAll();
  }

  ngOnDestroy(){
    this.todo$.unsubscribe();
  }

  setTodoToday(todo: Todo): void{
    this.todoService.setTodoToday(todo._id);
  }
}
