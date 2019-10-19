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
@NgModule({
  declarations: [DashboardComponent, CartComponent, OrdersComponent, LoginComponent, ShirtsComponent, JeansComponent, ShoesComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
