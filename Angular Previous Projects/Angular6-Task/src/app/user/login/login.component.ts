import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from '../login';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private rooter:Router,private service1:Service1Service) { }
  submitted=false;
  login:FormGroup;
  model:Ilogin={uname:'user001@thrymr.net',password:'test@123'}

  ngOnInit() {
    this.login=this.formBuilder.group({
      uname:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get f(){return this.login.controls;}
  onsubmit(){
    this.submitted=true;
    if(this.login.invalid){
      return;
    }
    if(this.model.uname==this.login.value.uname && this.model.password==this.login.value.password){
      alert("Login Successfully");
     this.rooter.navigate(['user/dashboard']);
      this.service1.sendToken(this.model.uname);
    }
    else{
      alert("Invalid Credentials")
    }
    this.reset();
  }
  reset(){
    this.login.reset();
    this.submitted=false;
  }

}
