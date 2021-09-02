import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // 定义属性
  heroes: Hero[] = [];

  // 定义方法
  // 从hero服务中获取数据
  getHeroes(): void{
    // 使用subscribe来将获取到的数据传给回调函数
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  // 添加英雄
  add(name: string){
    // 去除名字首尾的空格
    name = name.trim();
    // 如果名字为空就返回
    if(!name){
      return;
    }
    // 用该名字创建一个类似于 Hero 的对象并传给服务的 addHero() 方法
    // 当保存成功时，subscribe() 的回调函数会收到这个新英雄并追加到 heroes 的列表中
    this.heroService.addHero({name} as Hero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }
  // 删除英雄
  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h != hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  constructor(
    // 注入hero服务
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    // 调用getHeroes() 方法
    this.getHeroes();
  }

}
