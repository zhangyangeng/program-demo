import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { INIT_FLAG } from '../local-storage/local-storage.namespace';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuardService implements CanActivate {

  constructor(
    // 注入服务
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const init = !! this.localStorage.get(INIT_FLAG);

    if(state.url.includes('setup') && init){
      this.router.navigateByUrl('/main');
      return false
    }

    if(!state.url.includes('setup') && !init){
      this.router.navigateByUrl('/setup');
      return false;
    }

    return true;
  }
}
