import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent implements OnInit {

  details = '';
  message = '';
  sending = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  send(){
    this.sending = true;
    this.details = '发送消息中....';
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000)
  }
  cancel(){
    this.closePopup();
  }
  closePopup(){
    this.router.navigate([{
      outlets: {
        popup: null
      }
    }])
  }
}
