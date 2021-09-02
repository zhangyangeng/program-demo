import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // 定义属性
  messages: string[] = [];

  // 定义方法
  // 向缓存中添加消息
  add(message: string){
    this.messages.push(message);
  }
  // 清除缓存中的消息
  clear(){
    this.messages = [];
  }

  constructor() { }
}
