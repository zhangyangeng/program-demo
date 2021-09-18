import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainRoutingModule } from './pages/main/main-routing.module';
import { SettingRoutingModule } from './pages/setting/setting-routing.module';
import { SummaryRoutingModule } from './pages/summary/summary-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';
import { SummaryModule } from './pages/summary/summary.module';
import { SettingModule } from './pages/setting/setting.module';
// 引入服务
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ListService } from './services/list/list.service';
import { TodoService } from './services/todo/todo.service';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SetupModule,
    MainModule,
    SummaryModule,
    SettingModule,
    MainRoutingModule,
    SummaryRoutingModule,
    SettingRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: 'zh_CN' },
    // 日期格式本地化
    { provide: LOCALE_ID, useValue: 'zh_CN'},
    LocalStorageService,
    ListService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
