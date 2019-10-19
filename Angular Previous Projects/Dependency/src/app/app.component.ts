import { Component } from '@angular/core';
import { DependencyService } from './dependency.service';
import { Service1Service } from './service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names: { id: number; name: string; }[];
  Content:{content:string;}[];
  constructor(private dependencyservice: DependencyService,private service1service:Service1Service)
  {
    this.names = dependencyservice.getMyNames();
    this.Content=this.service1service.content();

  }
}