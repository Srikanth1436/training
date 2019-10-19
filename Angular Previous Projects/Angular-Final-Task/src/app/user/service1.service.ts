import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private router:Router) { }
  sendToken(token:string){
    localStorage.setItem('username',token);
  }
  getToken(){
    return localStorage.getItem('username');
  }
  isLoggedin(){
    return this.getToken()!==null;
  }
  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/user/login'])
  }
}

