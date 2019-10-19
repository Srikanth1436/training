import { Component, OnInit, ɵConsole } from '@angular/core';
import { Service1Service } from '../service1.service';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Shirts } from '../shirts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
display;
shirts:Shirts[];
alldata:any=[{name:"",brand:"",size:"",price:"",description:""}];

  constructor(private service1:Service1Service,private http:HttpClient,private rooter:Router) { 
      this.alldata=JSON.parse(localStorage.getItem('itemsdata'));
      console.log(this.alldata)
    }
  ngOnInit() {
    //this is shirt data display purpose
    //this is welcome message for user
    //this.display=localStorage.getItem('username');
    //console.log(this.shirts);


  }


  shirtsdata(){
    let array=[];
    let array1=[];
   let j=0;
   // array=JSON.parse('srikanth');
    if(array){
      for(let i=0;i<this.alldata.length;i++){
        if(this.alldata[i].name==="Shirts"){

          array[i]=this.alldata[i];
          if(array[i]==null)
          {
        array[i]=[];
        }
        array1[j]=array;
      }
      
       
        
    }
    console.log(array)
    localStorage.setItem('srikanth',JSON.stringify(array1));
    }
   

   
    //return this.shirts=array;
    // logout(){
    //   localStorage.removeItem('itemsdata')
    // }
      
  }
  




}
  // pur(lp:any){
  //   this.shirtsservice.myshirtsPurchaseList.push(lp);
  //   alert("Shirt Purchased");
  //   this.router.navigate(['/user/cart']);
  // }
  // shirtsdata(){
  //   for(let i=0;i<this.alldata.length;i++){

  //        let res=[];
  //       if(this.alldata[i].name==="Shirts"){
  //       return res=this.alldata[i];
  //     }
  //     localStorage.setItem('shirts',JSON.stringify(res));
  //   }