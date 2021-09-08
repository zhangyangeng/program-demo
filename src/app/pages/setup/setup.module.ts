import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SetupComponent } from './setup.component';

// 引入ng-zorro需要的模块
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';



@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class SetupModule { }
