import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JeansdataService {
    geansdata=[
      {brand:"Ruggers",size:"small",price:2500,description:"Very Good"},   
      {brand:"SCOTT",size:"small",price:3500,description:"Good"},   
      {brand:"PUMA",size:"small",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"small",price:3500,description:"Best"},   

      {brand:"Ruggers",size:"medium",price:2500,description:"Very Good"},   
      {brand:"SCOTT",size:"medium",price:3500,description:"Good"},   
      {brand:"PUMA",size:"medium",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"medium",price:3500,description:"Best"},   

      {brand:"Ruggers",size:"large",price:2500,description:"Very Good"},   
      {brand:"SCOTT",size:"large",price:3500,description:"Good"},   
      {brand:"PUMA",size:"large",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"large",price:3500,description:"Best"},   
  ];
  constructor() {

   }
   getgeansdata(){
     return this.geansdata;
   }

   myjeansPurchaseList = [];
}
