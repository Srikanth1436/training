import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  names= [
    {id: 1, name: 'srikanth'},
    {id: 2, name: 'madhu'},
    {id:3, name:'sneha'}
  ];

  constructor() { }

  getMyNames()
  {
    return this.names;
  }

}
