import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {
  hero$!: Observable<Hero>;

  // 将这些服务作为私有变量添加到构造函数中
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroesService
  ) { }

  ngOnInit(): void {
    // 检索路由的参数
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.service.getHero(params.get('id')!))
    )
  }

  gotoHeroes(hero: Hero){
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/superheroes', {
      id: heroId,
      foo: 'foo'
    }]);
  }

}
