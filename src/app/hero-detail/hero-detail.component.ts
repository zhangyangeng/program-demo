import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  // 定义方法
  // 获取指定英雄
  getHero(): void{
    // 使用route.snapshot来抓取路由信息的静态快照，使用paramMap从URL中提取路由参数，Number() 函数将字符串转换为数字
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  // 返回上一页
  goBack(): void{
    this.location.back();
  }
  // 保存修改
  save(): void{
    if(this.hero){
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
  
  constructor(
    // 注入以下服务
    private route: ActivatedRoute,      // 保存HeroDetailComponent 实例的路由信息
    private heroService: HeroService,   // 获取要显示的英雄数据
    private location: Location          // Angular 服务，与浏览器打交道
  ) { }

  ngOnInit(): void {
    // 调用getHero() 方法
    this.getHero();
  }

}
