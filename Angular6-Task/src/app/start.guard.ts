import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StartGuard implements CanActivate {
  constructor(private rooter:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,state: RouterStateSnapshot){
      this.rooter.navigate(['/user/login'])

return true;  }
}