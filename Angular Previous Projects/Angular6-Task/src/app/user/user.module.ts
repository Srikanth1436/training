import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import{ReactiveFormsModule} from '@angular/forms';
import { ShirtsComponent } from './shirts/shirts.component';
import { JeansComponent } from './jeans/jeans.component';
import { ShoesComponent } from './shoes/shoes.component';
import { WelPipe } from './dashboard/wel.pipe';
import { OrderidPipe } from './orders/orderid.pipe';

import { NgDatepickerModule } from 'ng2-datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [DashboardComponent, CartComponent, OrdersComponent, LoginComponent, ShirtsComponent, JeansComponent, ShoesComponent,  WelPipe, OrderidPipe],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgDatepickerModule
  ]})
export class UserModule { }
