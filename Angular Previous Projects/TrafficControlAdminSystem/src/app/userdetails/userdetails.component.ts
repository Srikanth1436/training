import { Component, OnInit } from '@angular/core';
//import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  data:any=[{id:"",name:"",licence:"",phone:""}];
  incdata:any=[{name:"",incident:"",date1:"",place:""}];

  constructor() { }

  ngOnInit() {
    this.data =  JSON.parse(localStorage.getItem('arrayData1'));
    this.incdata =  JSON.parse(localStorage.getItem('incData'));

    console.log("array data in  user details: ",this.data);
  }

  }

  
