import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Service1Service } from './service1.service';

@Injectable({
  providedIn: 'root'
})
export class LoginpurposeGuard implements CanActivate {
  constructor(private router:Router,private service1:Service1Service){}
  canActivate(){
    if(this.service1.islogged){
      this.router.navigate(['/user/dashboard'])
      return true;
    }
    else{
      alert("Please Login First");
      this.router.navigate(['/user/login']);
return false;

    }
  }
}
