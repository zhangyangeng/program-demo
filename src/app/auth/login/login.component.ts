import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.message = this.getMessage();
  }

  getMessage(){
    return '登录' + (this.authService.isLoggedIn ? '已成功' : '已退出');
  }

  login(){
    this.message = "尝试登录中...";
    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if(this.authService.isLoggedIn){
        const redirectUrl = '/admin';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        }
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout(){
    this.authService.logout();
    this.message = this.getMessage();
  }

  ngOnInit(): void {
  }

}
