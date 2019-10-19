import { Component, OnInit } from '@angular/core';
import { ShirtsdataService } from './shirtsdata.service';
import { Shirts } from '../shirts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  shirts:Shirts[];
  myshirtsPurchaseList = [];

  constructor(private shirtsservice:ShirtsdataService,private router:Router) { 
    this.shirts=shirtsservice.getshirtsdata();
  }

  ngOnInit(){
  }
 
  pur(lp:any){
    this.shirtsservice.myshirtsPurchaseList.push(lp);
    alert("Shirt Purchased");
    this.router.navigate(['/user/cart']);
  }

  }  

     