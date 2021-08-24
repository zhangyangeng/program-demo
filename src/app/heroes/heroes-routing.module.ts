import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  {
    path: 'heroes',
    redirectTo: '/superheroes'
  },
  {
    path: 'hero/:id',
    redirectTo: '/superheroes/:id'
  },
  {
    path: 'superheroes',
    component: HeroesListComponent,
    data: {
      animation: 'Heroes'
    },
  },
  {
    path: 'superheroes/:id',
    component: HeroesDetailComponent,
    data: {
      animation: 'hero'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
