import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';
// 引入服务
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { MainRoutingModule } from './pages/main/main-routing.module';
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
    MainRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    LocalStorageService,
    ListService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
