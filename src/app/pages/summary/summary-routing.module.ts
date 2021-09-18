import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitGuardService } from 'src/app/services/init-guard/init-guard.service';
import { SummaryComponent } from './summary.component';

const routes: Routes = [
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [InitGuardService]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SummaryRoutingModule { }
