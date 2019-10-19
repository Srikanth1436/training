import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderid'
})
export class OrderidPipe implements PipeTransform {

  transform(value: any) {
    let orderdate=new Date();
    return value=orderdate;
  }

}
