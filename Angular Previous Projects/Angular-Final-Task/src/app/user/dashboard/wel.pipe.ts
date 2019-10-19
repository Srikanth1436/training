
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wel'
})
export class WelPipe  implements PipeTransform {

  transform(value: any) {
    let message="Welcome  "+value;
    return value=message;
  }

}