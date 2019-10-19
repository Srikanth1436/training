import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service1:Service1Service,private http:HttpClient) { }

  ngOnInit() {
  }

}
