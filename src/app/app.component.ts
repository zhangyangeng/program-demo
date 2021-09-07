import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  constructor(
    // 注入主题服务
    private themeService: ThemeService
  ){  }
  // 改变主题，当点击该链接时会调用主题服务中的转变主题的方法
  toggleTheme(): void{
    this.themeService.toggleTheme().then((value) => {
      console.log("主题切换成功！");
    });
  }
}
