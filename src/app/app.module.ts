import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { AllEmpComponent } from './all-emp/all-emp.component';
import {MatTableModule} from '@angular/material/table';
import { EmployedetailsComponent } from './employedetails/employedetails.component';
import { RouterModule, Routes } from '@angular/router';
import { DilogComponent } from './dilog/dilog.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  { path: 'emp/:employeId', component: EmployedetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    LoginComponent,
    AllEmpComponent,
    EmployedetailsComponent,
    DilogComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,
    MatFormFieldModule,MatRadioModule,MatNativeDateModule,
    MatInputModule,MatIconModule,MatButtonModule,
    MatDatepickerModule,FormsModule,ReactiveFormsModule,
    MatTableModule,MatDialogModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    MatDatepickerModule,  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
