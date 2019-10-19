import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILogin } from '../login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: ILogin = { username: "traffic@thrymr.net", password: "123456" };
  loginform: FormGroup;
  returnUrl: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/home';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginform.controls; }

  
  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginform.invalid) {
        return;
    }
    else{
      if(this.f.username.value == this.model.username && this.f.password.value == this.model.password){
        alert("Login successful");
       
        this.router.navigate([this.returnUrl]);
      }
      else{
        alert("Invalid Credentials");
      }
    }    
}

}