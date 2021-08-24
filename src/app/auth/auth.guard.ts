import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, NavigationExtras, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild,CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
      return this.canActivate(route, state);
    }
  
  canLoad(route: Route): true | UrlTree{
    const url = '/$(route.path)';
    return this.checkLogin(url);
  }

  checkLogin(url: string): true|UrlTree {
    if(this.authService.isLoggedIn){
      return true;
    }
    this.authService.redirectUrl = url;
    const sessionId = 123456789;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        session_id: sessionId
      },
      fragment: 'anchor'
    }
    return this.router.createUrlTree(['./login'], navigationExtras);
  }
  
}
