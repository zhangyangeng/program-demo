import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // 定义属性
  heroes: Hero[] = [];

  // 定义方法
  getHeroes(): void{
    // 截取1-4这4个英雄
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  constructor(
    // 注入服务
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    // 调用getHeroes()
    this.getHeroes();
  }

}
