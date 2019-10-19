import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-itemsgenerate',
  templateUrl: './itemsgenerate.component.html',
  styleUrls: ['./itemsgenerate.component.css']
})
export class ItemsgenerateComponent implements OnInit {

  items:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.items=this.formBuilder.group({
      name: ['',Validators.required],
      brand: ['',Validators.required],
      size: ['',Validators.required],
      price: ['',Validators.required],
      description: ['',Validators.required],
     });
  }
  get f(){return this.items.controls;}
onSubmit(){
  this.submitted=true;
  if(this.items.invalid){
    return;
  }
  let presentedData=[];
  presentedData = JSON.parse(localStorage.getItem('itemsdata'));

     if(presentedData) {
       presentedData.push(this.items.value);
       localStorage.setItem('itemsdata',JSON.stringify(presentedData));
     }
     else {
       let array = [];
       array.push(this.items.value);
       localStorage.setItem('itemsdata',JSON.stringify(array));
       }
 
  alert("Item Inserted successfully");
this.router.navigate(['/itemsgenerate']);
this.resetform();
}
resetform(){
  this.items.reset();
  this.submitted=false;
}
  logout(){
    this.router.navigate(['/usercomponent']);
  }
}