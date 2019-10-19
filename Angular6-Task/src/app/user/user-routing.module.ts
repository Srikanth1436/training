import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { JeansComponent } from './jeans/jeans.component';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'orders',component:OrdersComponent},
  {path:'cart',component:CartComponent},
  {path:'shirts',component:ShirtsComponent},
  {path:'jeans',component:JeansComponent},
  {path:'shoes',component:ShoesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
