import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.css']
})
export class EmployedetailsComponent implements OnInit{
  employe: any;
  constructor( private route: ActivatedRoute, private api:ApiService , private http:HttpClient){}

 ngOnInit(): void {
  const employeId = this.route.snapshot.params['employeId'];
    this.getEmployeById(employeId);
 }
 getEmployeById(employeId: number){
  this.api.getEmployeeById(employeId).subscribe(
    (response) => {
      this.employe = response[0]; // Assuming the API response is an array containing a single employee object
      console.log('Employee:', this.employe); //Print the employee details in the console
    },
    (error) => {
      console.log(error);
    }
   );
  }
  setDefaultPic() {
    this.employe.img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAB5CAMAAABm4rHGAAAAUVBMVEXDw8MAAADGxsbLy8ttbW27u7umpqaOjo6Kioq+vr55eXmCgoK0tLQ2NjYYGBhlZWVzc3OdnZ1OTk4uLi5dXV1XV1eVlZUpKSlBQUEQEBA7OzvRV225AAABYUlEQVR4nO3Yx3LCMBRAUUkPywibYkIL//+hETZNXgit8pTMPSsGe3FHxc0YAAAAAAAAAAAAAP+aK6UVGHypoBMoK1tqJTqFC9stS3R2oVYYilZhUCxsnPm8E1yjWWhk2H8tmux5uoXO3zbCOhugXHgY96rPzbNy4XEsHNLCdGHqFko3FqYH3Kl/T1QeQ4nTvBmSALdNB1W50Ljeh2RSp2F9+0+7cLboYvE474eKClMurOe34soK4593zytQHYUi0y93ej7PnB/nVVHoVutxyGLMy/FxsIJCaeMl53YNdPv3p8JWaimctm+8Ob8W4WS6cFdQGC733TvMHq0voY5C2T5m9Tx/+t9KDYWuzbygnJx+oWu+M4Wb8QzlMbxmAq29qo+h7LKB1u5E+fnQfwiMdz/RLAx9bhHel2Kv+TZqfMELvTeKhV1bQu+bQ/Xfber/9vUHvh8CAAAAAAAAAAAA+B0/Ty0PoDQt6Z0AAAAASUVORK5CYII=";
  }
}
