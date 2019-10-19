import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
model: any = {};

  onSubmit() {
   // alert('Registered Successfully' + JSON.stringify(this.model))
    console.log(this.model);
  }
}
