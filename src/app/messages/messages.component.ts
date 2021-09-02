import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(
    // 注入消息服务，需要在模板中绑定，所以必须是公有的
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
