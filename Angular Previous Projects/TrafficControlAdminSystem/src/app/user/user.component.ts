import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';


@Component({
selector: 'app-user',
templateUrl: './user.component.html',
styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //data:any=[{id:"",name:"",licence:"",phone:""}];

createuser: FormGroup;
submitted = false;
constructor(private formBuilder: FormBuilder) {
}

ngOnInit() {
  //this.data =  JSON.parse(localStorage.getItem('arrayData1'));

this.createuser = this.formBuilder.group({
id:['',Validators.required],
name: ['', Validators.required],
licence: ['', Validators.required],
phone: ['',Validators.required]
});

}

get f() { return this.createuser.controls; }

onsubmit() {
  this.submitted = true;
if (this.createuser.invalid) {
  return;
  }
  
let sri = JSON.stringify(this.createuser.value);
console.log("sri : ",JSON.parse(localStorage.getItem('arrayData1')));

let presentedData  = [];
presentedData = JSON.parse(localStorage.getItem('arrayData1'));
  if(presentedData) {
    presentedData.push(this.createuser.value);
    localStorage.setItem('arrayData1',JSON.stringify(presentedData));
  }
  else {
    console.log("in else",this.createuser.value);
    let array = [];
    array.push(this.createuser.value);
    localStorage.setItem('arrayData1',JSON.stringify(array));
    }
alert("User Registered Successfully!!");

this.resetForm();
}
resetForm() {
this.createuser.reset();
this.submitted = false;
}
/*
  delete(id:number) {
    let dummy=localStorage.getItem('arrayData1');
    if(this.data[id]==localStorage.arrayData1[id]){
      const i = dummy.indexOf('id');
      if (i !== -1){
      localStorage.dummy.splice(i,1);
      localStorage.setItem('arrayData1',dummy);
      alert("user Record Deleted");
      console.log("deleted");
      }
     
  }
  }*/
}