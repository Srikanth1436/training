import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.css']
})
export class SsComponent implements OnInit {
  sri = "Passing Value To HTML File(ss.component.html)";

  constructor() { }
  ngOnInit() {
  }

}


