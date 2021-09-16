import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { LeftControlComponent } from './left-control/left-control.component';
import { RightControlComponent } from './right-control/right-control.component';
import { HeaderComponent } from './right-control/header/header.component';
import { QuickAddComponent } from './right-control/quick-add/quick-add.component';
import { TodoComponent } from './right-control/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { SuggestComponent } from './right-control/header/suggest/suggest.component';
import { DetailComponent } from './detail/detail.component';

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
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

// 服务
import { NzMessageService } from 'ng-zorro-antd/message';


// const icons: IconDefinition[] = [SettingOutline];

@NgModule({
  declarations: [
    MainComponent,
    LeftControlComponent,
    ListComponent,
    RightControlComponent,
    HeaderComponent,
    QuickAddComponent,
    TodoComponent,
    SuggestComponent,
    DetailComponent
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
    NzInputModule,
    NzListModule,
    NzSpaceModule,
    NzCheckboxModule,
    NzPopconfirmModule,
    NzDividerModule,
    NzDatePickerModule,
    NzSwitchModule
  ],
  providers: [
    NzMessageService
  ]
})
export class MainModule { }
