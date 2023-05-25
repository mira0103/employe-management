import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private loggedIn = <boolean>(false); 
     public Username: any;
  authService: any;
    constructor(private http:HttpClient,private routes : Router,service:AuthService) {
     }
     getemployee(): Observable<any> {
      return this.http.get<any>('http://localhost:3000/employee')
    }
    getemployeeforauth(empid: string, password: string): Observable<boolean> {
      return this.http.get<{ email: string, password: string ,role:string}[]>('http://localhost:3000/employee').pipe(
        map(users => {
          const user = users.find(m => m.email === empid && m.password === password);
          if (user) {
            this.Username = user.role;
            this.authService.setLoggedIn(true);
            this.routes.navigate(['/all-emp']);
          
            console.log('Current user:', this.Username);
            
          } else {
            this.authService.setLoggedIn(false);
           
          }
          return this.authService.isLoggedIn();
        })
      );  
    }
    getuserdetail(){
      this.Username
    }
  
      
}
