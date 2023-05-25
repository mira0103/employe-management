import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  constructor(private apiService: ApiService) { }

  getEmployeeById(employeId: any): Observable<any> {
    return this.apiService.getEmployeeById(employeId);
  
  }


}
