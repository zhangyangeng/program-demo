import { APP_INITIALIZER } from '@angular/core';
import { ThemeService } from './theme.service';

export const AppInitializerProvider = {
  // 整个系统启动时，加载项目的配置文件
  /*
   * provide字段用来设置与依赖对象管理的Token值
   * useFactory字段用来设置创建对象的工厂函数
   * deps字段用来设置依赖对象的列表
   * multi字段用于表示是否是多注入
   */
  provide: APP_INITIALIZER,
  useFactory: (themeService: ThemeService) => () => {
    return themeService.loadTheme();
  },
  deps: [ThemeService],
  multi: true
}
