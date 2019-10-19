import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Signup: FormGroup;
  submitted = false;
  todaydate;
  router: any;

  constructor(private formBuilder: FormBuilder,private myservice: MyserviceService) { }

  ngOnInit() {
    this.Signup = this.formBuilder.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.todaydate = this.myservice.showTodayDate();

}

  // convenience getter for easy access to form fields
  get f() { return this.Signup.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.Signup.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Signup.value))
      this.router.navigateByUrl(['data.html']);
  }
}