import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoesserviceService {

    shoesdata=[
      {brand:"NIKE",size:"small",price:2500,description:"Very Good"},   
      {brand:"BATA",size:"small",price:3500,description:"Good"},   
      {brand:"PUMA",size:"small",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"small",price:3500,description:"Best"},   

      {brand:"NIKE",size:"medium",price:2500,description:"Very Good"},   
      {brand:"SCOTT",size:"medium",price:3500,description:"Good"},   
      {brand:"PUMA",size:"medium",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"medium",price:3500,description:"Best"},   

      {brand:"NIKE",size:"large",price:2500,description:"Very Good"},   
      {brand:"BATA",size:"large",price:3500,description:"Good"},   
      {brand:"PUMA",size:"large",price:4500,description:"Perfect"},   
      {brand:"JOCKEY",size:"large",price:3500,description:"Best"},   
  ];
  constructor() {

   }
   getshoesdata(){
     return this.shoesdata;
   }

   myshoesPurchaseList = [];
}
