import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LoginpurposeGuard } from './user/loginpurpose.guard';
import { StartGuard } from './start.guard';
import { ItemsgenerateComponent } from './itemsgenerate/itemsgenerate.component';

const routes: Routes = [{path:'',component:StartComponent,canActivate:[StartGuard]},
  {path:'user',loadChildren:'./user/user.module#UserModule'},
  {path:'itemsgenerate',component:ItemsgenerateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
