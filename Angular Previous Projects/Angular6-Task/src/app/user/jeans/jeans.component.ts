import { Component, OnInit } from '@angular/core';
import { JeansdataService } from './jeansdata.service';
import { Shirts } from '../shirts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shirts',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent implements OnInit {
  jeans:Shirts[];
  myjeansPurchaseList = [];

  constructor(private jeansservice:JeansdataService,private router:Router) { 
    this.jeans=jeansservice.getgeansdata();
  }

  ngOnInit(){
  }
 
  pur(lp:any){
    this.jeansservice.myjeansPurchaseList.push(lp);
    alert("Jeans Purchased");
    this.router.navigate(['/user/cart']);
  }

  }  
 
     