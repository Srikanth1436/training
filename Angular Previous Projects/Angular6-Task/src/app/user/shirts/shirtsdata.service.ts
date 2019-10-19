import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShirtsdataService {

    shirtsdata=[
      {brand:"RAMRAJ",size:"small",price:2500,description:"Very Good"},   
      {brand:"SCOTT",size:"small",price:3500,description:"Good"},   
      {brand:"PUMA",size:"small",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"small",price:3500,description:"Best"},   

      {brand:"RAMRAJ",size:"medium",price:2500,description:"Very Good"},   
      {brand:"SCOTT",size:"medium",price:3500,description:"Good"},   
      {brand:"PUMA",size:"medium",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"medium",price:3500,description:"Best"},   

      {brand:"RAMRAJ",size:"large",price:2500,description:"Very Good"},   
      {brand:"SCOTT",size:"large",price:3500,description:"Good"},   
      {brand:"PUMA",size:"large",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"large",price:3500,description:"Best"},   
  ];
  constructor() {

   }
   getshirtsdata(){
     return this.shirtsdata;
   }

   myshirtsPurchaseList = [];
}
