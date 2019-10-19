import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
  incdata:any=[{name:"",incident:"",date1:"",place:""}];

  inc: FormGroup;
  submitted = false;
  data:any=[{name:"",licence:"",phone:""}];
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.incdata =  JSON.parse(localStorage.getItem('incData'));

    this.data =  JSON.parse(localStorage.getItem('arrayData1'));

    this.inc = this.formBuilder.group({
        name: ['', Validators.required],
        incident: ['', Validators.required],
        date1: ['',Validators.required],
        place: ['',Validators.required],
    });
}

  get f() { return this.inc.controls; }

  generate() {
      this.submitted = true;
      if (this.inc.invalid) {
          return;
      }
      let incident = JSON.stringify(this.inc.value);
      console.log("incident : ",JSON.parse(localStorage.getItem('incData')));
      
      let incpresentedData  = [];
      incpresentedData = JSON.parse(localStorage.getItem('incData'));
        if(incpresentedData) {
          incpresentedData.push(this.inc.value);
          localStorage.setItem('incData',JSON.stringify(incpresentedData));
        }
        else {
          console.log("in else",this.inc.value);
          let incarray = [];
          incarray.push(this.inc.value);
          localStorage.setItem('incData',JSON.stringify(incarray));
          }
      alert('Incident Generated Successfully!!');
      this.resetForm();
    }
    resetForm() {
      this.inc.reset();
      this.submitted = false;
  }
}