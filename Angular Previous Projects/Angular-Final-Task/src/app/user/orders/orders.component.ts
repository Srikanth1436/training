import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cart/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

 myordersdata:any=[{id:"",brand:"",size:"",price:"",description:"",orderdate:""}];
  searcharray: any=[];
  search: string;

  constructor(private cart:CartserviceService,private router:Router) { 

  }
  ngOnInit() {
    this.myordersdata=JSON.parse(localStorage.getItem('ordersdata'));
    console.log(this.myordersdata);
   
  }

delete(index:any){
this.myordersdata.splice(index,1);
localStorage.ordersdata=JSON.stringify(this.myordersdata);
  alert("Item was Cancelled");
  this.router.navigate(['/user/orders']);
}
cleardata(){
  localStorage.clear();
}



searchid(id:number){
  try{
    var res = this.myordersdata.filter( obj => obj.id == id)[0];
    console.log(res.id);
    this.searcharray.pop();
      this.searcharray.push(res); 
    // return this.searcharray(res);
    this.search='';

  }
  catch (error) {
    this.search='No Matching Records';
    ​​} 
}


}


/*
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
  orderdate=new Date();
  ordersdata:any=[];
  constructor(private cart:CartserviceService,private router:Router) { }
  ngOnInit() {
    this.ordersdata=JSON.parse(localStorage.getItem('ordersdata'));
    console.log(this.ordersdata)
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





     searchrecord(id:number){
      try{
        var res=this.data.filter(obj=>obj.id==id)[0];
        this.searcharray.push(res);
      }
      catch(error){
        this.search='No Records';
      }
    }
}
}




delete(index){
  this.myordersdata.splice(index,1);
  localStorage.setItem('ordersdata',JSON.stringify(this.myordersdata));
    alert("Item was Cancelled");
    this.router.navigate(['/user/orders']);
  }



/*import { Component, OnInit } from '@angular/core';
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

  orderdate=new Date();
  myordersdata=[];
  constructor(private cart:CartserviceService,private router:Router) { }
  ngOnInit() {
    this.myordersdata=JSON.parse(localStorage.getItem('ordersdata'));
    console.log(this.myordersdata)
  }

delete(index){
this.myordersdata.splice(index,1);
localStorage.setItem('ordersdata',JSON.stringify(this.myordersdata));
  alert("Item was Cancelled");
  this.router.navigate(['/user/orders']);
}
cleardata(){
  localStorage.clear();
}

}
*/