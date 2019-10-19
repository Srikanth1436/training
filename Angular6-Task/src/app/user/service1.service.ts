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
  get(){
    return localStorage.getItem('username');
  }
  islogged(){
    this.get()!=null;
  }
  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/user/login'])
  }
}
