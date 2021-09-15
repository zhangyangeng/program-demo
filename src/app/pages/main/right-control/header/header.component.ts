import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListService } from 'src/app/services/list/list.service';
import { TodoService } from 'src/app/services/todo/todo.service';
import { RankBy } from 'src/domain/type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private listTitle$!: Subscription;
  listTitle = '';

  constructor(
    // 注入服务
    private listService: ListService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.listTitle$ = this.listService.current$.subscribe(list => {
      this.listTitle = list ? list.title : '';
    })
  }

  switchRankType(e: RankBy){
    this.todoService.toggleRank(e);
    console.log('e')
  }

}
