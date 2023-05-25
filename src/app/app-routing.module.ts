import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { LoginComponent } from './login/login.component';
import { AllEmpComponent } from './all-emp/all-emp.component';
import { EmployedetailsComponent } from './employedetails/employedetails.component';
import { DilogComponent } from './dilog/dilog.component';

const routes: Routes = [
  { path:'add-emp', component:AddEmpComponent},
  { path:'all-emp', component:AllEmpComponent},
  { path:'login', component:LoginComponent },
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  {path: 'emp/:employeId',
  component:EmployedetailsComponent},
  { path:'dilog/:id',component:DilogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
