import { Injectable } from '@angular/core';

const ls = localStorage;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // 获取localstorage
  public get<T>(key: string): any{
    /*
     * localstorage返回的类型为string || null
     * 所以这里先判断key值是否存在，如果有就强制将其类型设置为string，最后将数据转换为JavaScript对象
     * 也可以使用或运算符，当localstorage返回空时就使用或运算符后面的空字符串
     */
    if(key){
      return JSON.parse(ls.getItem(key)!) as T;
    }
    // return JSON.parse(ls.getItem(key) || '') as T;
  }
  // 获取localstorage列表
  public getList<T>(key: string){
    const before = ls.getItem(key);
    return before ? (JSON.parse(before) as T[]) : [];
  }
  // 设置localstorage
  public set(key: string, value: any): void{
    if(!value && value === undefined){
      return;
    }
    // 将JavaScript对象转换为JSON字符串
    const arr = JSON.stringify(value);
    ls.setItem(key, arr);
  }
}
