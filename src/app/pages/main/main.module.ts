import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { LeftControlComponent } from './left-control/left-control.component';
import { FormsModule } from '@angular/forms';

// 引入ng-zorro需要的模块
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconDefinition } from '@ant-design/icons-angular';
import { SettingOutline } from '@ant-design/icons-angular/icons';
import { ListComponent } from './left-control/list/list.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';


// const icons: IconDefinition[] = [SettingOutline];

@NgModule({
  declarations: [
    MainComponent,
    LeftControlComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    NzLayoutModule,
    NzAvatarModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
    NzModalModule,
    NzDropDownModule,
    NzFormModule,
    NzInputModule
  ]
})
export class MainModule { }
