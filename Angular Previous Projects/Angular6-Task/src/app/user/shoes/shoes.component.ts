import { Component, OnInit } from '@angular/core';
import { Shirts } from '../shirts';
import { Router } from '@angular/router';
import { ShoesserviceService } from './shoesservice.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {


  shoes:Shirts[];
  myshoesPurchaseList = [];

  constructor(private shoesservice:ShoesserviceService,private router:Router) { 
    this.shoes=shoesservice.getshoesdata();
  }

  ngOnInit(){
  }
 
  pur(lp:any){
    this.shoesservice.myshoesPurchaseList.push(lp);
    alert("Shoe Purchased");
    this.router.navigate(['/user/cart']);
  }

  }  

     