
import { Component, OnInit } from '@angular/core';
import { Shirts } from '../shirts';
import { JeansdataService } from '../jeans/jeansdata.service';
import { ShoesserviceService } from '../shoes/shoesservice.service';
import { ShirtsdataService } from '../shirts/shirtsdata.service';
import { Router } from '@angular/router';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myjeans = [];
  myshirts = [];
  myshoes = [];

constructor(private jeansservice:JeansdataService,private shoesservice:ShoesserviceService,private shirtsservice:ShirtsdataService,private router:Router,private cart:CartserviceService) { }

  ngOnInit() {
  }
pay1(lp1){
  let presentedData  = [];
  presentedData = JSON.parse(localStorage.getItem('ordersdata'));

     if(presentedData) {
       presentedData.push(lp1);
       localStorage.setItem('ordersdata',JSON.stringify(presentedData));
       this.shirtsservice.myshirtsPurchaseList.splice(lp1,1);
     }
     else {
       let array = [];
       array.push(lp1);
       localStorage.setItem('ordersdata',JSON.stringify(array));
       this.shirtsservice.myshirtsPurchaseList.splice(lp1,1);
       }
  alert("Shirt Amount Paid");
  this.router.navigate(['/user/orders']);
}
pay2(lp2){
  let presentedData  = [];
  presentedData = JSON.parse(localStorage.getItem('ordersdata'));
     if(presentedData) {
       presentedData.push(lp2);
       localStorage.setItem('ordersdata',JSON.stringify(presentedData));
       this.jeansservice.myjeansPurchaseList.splice(lp2,1);
     }
     else {
       let array = [];
       array.push(lp2);
       localStorage.setItem('ordersdata',JSON.stringify(array));
       this.jeansservice.myjeansPurchaseList.splice(lp2,1);
       }
  alert("Jeans Amount Paid");
  this.router.navigate(['/user/orders']);
}
pay3(lp3){

  let presentedData  = [];
  presentedData = JSON.parse(localStorage.getItem('ordersdata'));
     if(presentedData) {
       presentedData.push(lp3);
       localStorage.setItem('ordersdata',JSON.stringify(presentedData));
       this.shoesservice.myshoesPurchaseList.splice(lp3,1);
     }
     else {
       let array = [];
       array.push(lp3);
       localStorage.setItem('ordersdata',JSON.stringify(array));
       this.shoesservice.myshoesPurchaseList.splice(lp3,1);
       }
  alert("Shoes Amount Paid");
  this.router.navigate(['/user/orders']);
}
}


/*
let presentedData  = [];
 presentedData = JSON.parse(localStorage.getItem('arrayData1'));

    if(presentedData) {
      presentedData.push(this.createuser.value);
      localStorage.setItem('arrayData1',JSON.stringify(presentedData));
    }
    else {
      console.log("in else",this.createuser.value);
      let array = [];
      array.push(this.createuser.value);
      localStorage.setItem('arrayData1',JSON.stringify(array));
      }



      /*import { Component, OnInit } from '@angular/core';
import { Shirts } from '../shirts';
import { JeansdataService } from '../jeans/jeansdata.service';
import { ShoesserviceService } from '../shoes/shoesservice.service';
import { ShirtsdataService } from '../shirts/shirtsdata.service';
import { Router } from '@angular/router';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myjeans = [];
  myshirts = [];
  myshoes = [];

constructor(private jeansservice:JeansdataService,private shoesservice:ShoesserviceService,private shirtsservice:ShirtsdataService,private router:Router,private cart:CartserviceService) { }

  ngOnInit() {
  }
pay1(lp1){

  this.cart.myshirts.push(lp1);
  this.shirtsservice.myshirtsPurchaseList.splice(lp1,1);
  alert("Shirt Amount Paid");
  this.router.navigate(['/user/orders']);
}
pay2(lp2){

  this.cart.myjeans.push(lp2);
  this.jeansservice.myjeansPurchaseList.splice(lp2,1);
  alert("Jeans Amount Paid");
  this.router.navigate(['/user/orders']);
}
pay3(lp3){

  this.cart.myshoes.push(lp3);
  this.shoesservice.myshoesPurchaseList.splice(lp3,1);
  alert("Shoes Amount Paid");
  this.router.navigate(['/user/orders']);
}
}*/






/*

import { Component, OnInit } from '@angular/core';
import { Shirts } from '../shirts';
import { JeansdataService } from '../jeans/jeansdata.service';
import { ShoesserviceService } from '../shoes/shoesservice.service';
import { ShirtsdataService } from '../shirts/shirtsdata.service';
import { Router } from '@angular/router';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myjeans = [];
  myshirts = [];
  myshoes = [];

constructor(private jeansservice:JeansdataService,private shoesservice:ShoesserviceService,private shirtsservice:ShirtsdataService,private router:Router,private cart:CartserviceService) { }

  ngOnInit() {
  }
pay1(lp1){
  let presentedData  = [];
  presentedData = JSON.parse(localStorage.getItem('ordersdata'));
 if(presentedData==null){
   console.log("sri");
 }
     if(presentedData) {
       presentedData.push(lp1);
       localStorage.setItem('ordersdata',JSON.stringify(presentedData));
       this.shirtsservice.myshirtsPurchaseList.splice(lp1,1);
     }
     else {
       let array = [];
       array.push(lp1);
       localStorage.setItem('ordersdata',JSON.stringify(array));
       this.shirtsservice.myshirtsPurchaseList.splice(lp1,1);
       }
  alert("Shirt Amount Paid");
  this.router.navigate(['/user/orders']);
}
pay2(lp2){
  let presentedData  = [];
  presentedData = JSON.parse(localStorage.getItem('ordersdata'));
     if(presentedData) {
       presentedData.push(lp2);
       localStorage.setItem('ordersdata',JSON.stringify(presentedData));
       this.jeansservice.myjeansPurchaseList.splice(lp2,1);
     }
     else {
       let array = [];
       array.push(lp2);
       localStorage.setItem('ordersdata',JSON.stringify(array));
       this.jeansservice.myjeansPurchaseList.splice(lp2,1);
       }
  alert("Jeans Amount Paid");
  this.router.navigate(['/user/orders']);
}
pay3(lp3){

  let presentedData  = [];
  presentedData = JSON.parse(localStorage.getItem('ordersdata'));
     if(presentedData) {
       presentedData.push(lp3);
       localStorage.setItem('ordersdata',JSON.stringify(presentedData));
       this.shoesservice.myshoesPurchaseList.splice(lp3,1);
     }
     else {
       let array = [];
       array.push(lp3);
       localStorage.setItem('ordersdata',JSON.stringify(array));
       this.shoesservice.myshoesPurchaseList.splice(lp3,1);
       }
  alert("Shoes Amount Paid");
  this.router.navigate(['/user/orders']);
}
}*/