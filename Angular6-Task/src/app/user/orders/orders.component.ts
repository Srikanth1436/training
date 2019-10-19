import { Component, OnInit } from '@angular/core';
import { JeansdataService } from '../jeans/jeansdata.service';
import { ShoesserviceService } from '../shoes/shoesservice.service';
import { ShirtsdataService } from '../shirts/shirtsdata.service';
import { CartserviceService } from '../cart/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
search:string;
searcharray=[]
  data: any;
  constructor(private cart:CartserviceService,private router:Router) { }
  ngOnInit() {
  }
searchrecord(id:number){
  try{
    var res=this.data.filter(obj=>obj.id==id)[0];
    this.searcharray.push(res);
  }
  catch(error){
    this.search='No Records';
  }
}
del4(lp4){
this.cart.myshirts.splice(lp4,1);
  alert("Shirt Item Cancelled");
  this.router.navigate(['/user/orders']);
}
del5(lp5){
  this.cart.myjeans.splice(lp5,1);
    alert("Jeans Item Cancelled");
    this.router.navigate(['/user/orders']);
  }
  del6(lp6){
    this.cart.myshoes.splice(lp6,1);
      alert("Shoe Item Cancelled");
      this.router.navigate(['/user/orders']);
    }
}
