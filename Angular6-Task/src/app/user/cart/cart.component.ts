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
}
