import { Injectable } from '@angular/core';

enum ThemeType{
  dark = "dark",
  default = "default",
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  // 设置网站的当前主题
  currentTheme = ThemeType.default;
  // 转变主题
  /*
   * 传入一个字符串，判断该字符串是否与枚举中的夜间模式相等
   * 如果相等，说明此时为夜间模式，更改为默认模式
   * 如果不相等，说明此时为默认模式，更改为夜间模式
   * 最后返回枚举类型中的字符串
   */
  private reverseTheme(theme: string): ThemeType{
    return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark
  }
  // 移除已有主题
  /*
   * 先移除当前 HTML 元素上旧主题的 class 名
   * 获取到当前主题的 link 标签，如果存在就移除，如果不存在则返回
   */
  private removeUnusedTheme(theme: string): void{
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if(removedThemeStyle){
      document.head.removeChild(removedThemeStyle);
    }
  }
  // 加载CSS，返回一个新的Promise对象
  /*
   * 通过插入一个 <link> 标签来引入指定的css样式
   * 先创建一个 html 元素
   * 设置该 html 元素的 rel、href、id 等属性
   * 如果该元素加载就将 Promise 状态更改为 resolve，如果该元素加载出错就将 Promise 状态更改为 reject
   * 最后将该元素插入到 <head> 标签的后面
   */
  private loadCss(href: string, id: string): Promise<Event>{
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    })
  }
  // 加载主题
  /*
   * 在项目初次加载时无需传入参数就会设置为默认主题，同时给网页的html标签添加class属性，最后返回一个新的Promise对象
   * 在该对象中调用 loadCss() 方法加载css样式，该方法会返回一个 Promise
   * 通过调用该 Promise 对象的 then() 方法来执行成功或者失败的回调
   * 成功回调中会将当前已使用的主题进行移除，同时修改状态为 resolved
   * 失败回调中直接修改状态为 rejected
   */
  public loadTheme(firstLoad = true): Promise<Event>{
    const theme = this.currentTheme;
    if(firstLoad){
      document.documentElement.classList.add(theme);
    }
    return new Promise((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (e) => {
          if(!firstLoad){
            document.documentElement.classList.add(theme);
          }
          this.removeUnusedTheme(this.reverseTheme(theme));
          resolve(e);
        },
        (e) => reject(e)
      )
    })
  }
  // 实时更换当前主题
  /*
   * 通过调用 reverseTheme() 函数来转换主题
   * 同时加载主题以及相关 CSS 样式
   */
  public toggleTheme(): Promise<Event>{
    this.currentTheme = this.reverseTheme(this.currentTheme);
    return this.loadTheme(false);
  }
}
