import { Component,OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    todaydate;
    
    constructor(private myservice: MyserviceService) { }
    ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
  }
}