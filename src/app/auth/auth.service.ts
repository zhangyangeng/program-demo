import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  // 储存URL当我们在登录后重新指向
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void{
    this.isLoggedIn = false;
  }

  constructor() { }
}
