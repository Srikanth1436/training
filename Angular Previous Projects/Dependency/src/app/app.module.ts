import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DependencyService} from './dependency.service';
import{Service1Service} from './service1.service';
import { InsideComponent } from './inside/inside.component';
@NgModule({
  declarations: [
    AppComponent,
    InsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DependencyService,Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
