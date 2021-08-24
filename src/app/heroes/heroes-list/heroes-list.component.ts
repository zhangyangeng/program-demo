import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { MessageService } from 'src/app/message.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroesService,
    // private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.heroService.getHeroes();
      })
    ) 
  }

  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(): void{
  //   this.heroService.getHeroes().subscribe(heroes => {
  //     this.heroes = heroes;
  //   })
  // }
}
