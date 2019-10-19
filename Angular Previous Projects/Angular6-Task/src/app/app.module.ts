import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { Service1Service } from './user/service1.service';
import { StartGuard } from './start.guard';
import{HttpClientModule} from '@angular/common/http';
import { PurchaseService } from './user/purchase.service';
import { JeansdataService } from './user/jeans/jeansdata.service';
import { ShirtsdataService } from './user/shirts/shirtsdata.service';
import { ShoesserviceService } from './user/shoes/shoesservice.service';
import { OrdersService } from './user/orders/orders.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [Service1Service,StartGuard,PurchaseService,JeansdataService,ShirtsdataService,
    ShoesserviceService,OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
