import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';
import { InitGuardService } from './services/init-guard/init-guard.service';

const routes: Routes = [
  {
    path: 'setup',
    component: SetupComponent,
    // 引用路由守护策略
    canActivate: [InitGuardService]
  },
  {
    path: 'summary',
    redirectTo: '/summary',
    pathMatch: 'full'
  },
  {
    path: 'setting',
    redirectTo: '/setting',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/setting',
    pathMatch: 'full'
  },
  {
    path: 'main',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
