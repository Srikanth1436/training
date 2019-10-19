import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{InsideComponent} from './inside/inside.component';
const routes: Routes = [{path:'inside',component:InsideComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=RouterModule.forRoot(routes);