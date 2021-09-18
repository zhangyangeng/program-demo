import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';

// 引入 ng-zorro 需要的模块
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzBadgeModule } from 'ng-zorro-antd/badge';



@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzSliderModule,
    NzAvatarModule,
    NzCalendarModule,
    NzIconModule,
    NzNotificationModule,
    NzBadgeModule
  ]
})
export class SummaryModule { }
