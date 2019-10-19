import { Component } from '@angular/core';
import {user} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Position=["Developer","Testing","HR","CEO"];
userModel=new user('','','','',0,'',"",'','');
topicHasError = true;
  submitted = false;
  errorMsg = '';
onSubmit() {
  this.submitted = true;
}
}
