import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{HomeComponent} from './home/home.component';
import { AuthGuard } from "./auth.guard";
import { UserComponent } from "./user/user.component";
import { IncidentComponent } from "./incident/incident.component";
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { IncidentdetailsComponent } from './incidentdetails/incidentdetails.component';
const routes: Routes = [{path:'login',component:LoginComponent}, 
{path:'',component:LoginComponent,canActivate: [AuthGuard] },
{path:'home',component:HomeComponent},
{path:'user',component:UserComponent},
{path:'incident',component:IncidentComponent},
{path:'userdetails',component:UserdetailsComponent},
{path:'incidentdetails',component:IncidentdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=RouterModule.forRoot(routes);
