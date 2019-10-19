import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidentdetails',
  templateUrl: './incidentdetails.component.html',
  styleUrls: ['./incidentdetails.component.css']
})
export class IncidentdetailsComponent implements OnInit {
  incdata:any=[{name:"",incident:"",date1:"",place:""}];

  constructor() { }

  ngOnInit() {
    this.incdata =  JSON.parse(localStorage.getItem('incData'));
    console.log("array data in  incident details: ",this.incdata);
  }
  deleteincident(){
    //this.incdata.removeAt(i);

    localStorage.removeItem('incData');
    
    alert("Incident Deleted");
  }
}
      
