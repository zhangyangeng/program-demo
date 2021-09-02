import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  // 定义属性
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    // 注入服务
    private heroService: HeroService
  ) { }

  // 定义方法
  search(term: string): void{
    // 调用next方法向Observable中推送一些值
    this.searchTerms.next(term);
  }
  
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // 新增字符串事件暂停300ms时才会发起请求
      debounceTime(300),
      // 确保只在过滤条件变化时才发送请求
      distinctUntilChanged(),
      // 从以上两个条件通过的搜索词提供搜索服务，且丢弃以前的可观察对象
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    )
  }

}
