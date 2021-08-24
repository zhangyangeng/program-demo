import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadAllModules, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'crisis-center',
        loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
        data: { preload: true }
      },
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/superheroes',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ], {
      enableTracing: true,
      // 启用预加载功能
      preloadingStrategy: SelectivePreloadingStrategyService
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
