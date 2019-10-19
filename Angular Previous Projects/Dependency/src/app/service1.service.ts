import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
Content=[{content:'He is from Tirupati'},
{content:'He is from Godavari'},{content:'She is from Hyderabad'}
]
  constructor() { }
  content(){
    return this.Content;
  }
}
