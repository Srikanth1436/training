import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LoginpurposeGuard } from './user/loginpurpose.guard';
import { StartGuard } from './start.guard';

const routes: Routes = [{path:'',component:StartComponent,canActivate:[StartGuard]},
  {path:'user',loadChildren:'./user/user.module#UserModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
