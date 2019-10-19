import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { Service1Service } from './user/service1.service';
import { StartGuard } from './start.guard';
import{HttpClientModule} from '@angular/common/http';
import { OrdersService } from './user/orders/orders.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsgenerateComponent } from './itemsgenerate/itemsgenerate.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ItemsgenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [Service1Service,StartGuard,OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
