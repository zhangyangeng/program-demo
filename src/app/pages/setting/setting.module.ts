import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';




@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzDividerModule,
    NzInputModule,
    NzSwitchModule,
    NzAvatarModule,
    NzIconModule,
    FormsModule,
    NzButtonModule,
    NzMessageModule,
    NzModalModule
  ]
})
export class SettingModule { }
