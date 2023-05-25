import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  private apiUrl = 'http://localhost:3000/employelist'; 
  baseApiUrl = "https://file.io"


  constructor( private http:HttpClient) { }
  upload(file:any) {
    const formData = new FormData(); 
          formData.append("file", file, file.name);
  }

  postEmploye(data : any){
    return this.http.post<any>("http://localhost:3000/employelist",data);
  }
  getEmploye(){
    return this.http.get<any>("http://localhost:3000/employelist");
  }
  getEmployeeById(employeId: number): Observable<any> {
    const url = "http://localhost:3000/employelist?employeId="+ employeId;
    return this.http.get<any>(url);  }  
  
  putEmploye(data: any,id : number){
    return this.http.put<any>("http://localhost:3000/employelist"+id ,data);
  }
  deleteEmploye(id:number){
    return this.http.delete<any>("http://localhost:3000/employelist/"+id);
  }
  addEmploye(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employelist', data)
}
  edit(id:any){
  return this.http.get(`http://localhost:3000/employelist/${id}`);
  }
  update(data:any){
    return this.http.put(`http://localhost:3000/employelist/${data.id}`, data)
  
  } 
  getRole(employeeId: string, password: string): Observable<string> {
    return this.http.get<{ email: string, password: string, option: string }[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.email === employeeId && u.password === password);
        if (user) {
          return user.option;
        }
        else {
          throw new Error('Invalid credentials');
        }
      })
    );
  }
}