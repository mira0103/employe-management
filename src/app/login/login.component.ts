import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  hide= true;
  error: any;
  validate: any;
  emailControl = new FormControl('');
   
  constructor(private formBuilder: FormBuilder,private api:ApiService , private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      
    });
  }

login(): void {
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;

  this.api.getRole(email, password).subscribe(
    role => {
      alert("Login Success!!");
      localStorage.setItem('option', role);
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('mygroup', JSON.stringify(this.loginForm.value));
      this.router.navigate(["../all-emp"]);
    },
    error => {
      alert("Login failed!!user not found");
    }
   ); 
  console.log(this.loginForm.value);
}
  // login(): void{
//   const user = { email: this.loginForm.value.employeId, password: this.loginForm.value.password, role:this.loginForm.value.option };
//    this.http.get<any>("http://localhost:3000/employelist").subscribe(res=>{
//     const user =res.find((a:any)=>{
//       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
//     });
//     if(user){
//       alert("Login Success!!");
//       localStorage.setItem('role',this.api.user.option)
//       localStorage.setItem('token', 'dummy-token'); // store loginUsers in local storage
//       localStorage.setItem('mygroup',JSON.stringify(this.loginForm.value));
//       this.router.navigate(["../all-emp"])
//     } else{
//       alert("user not found");
//     }
//    }, err=>{
//       alert("something went wrong!!")
//    })
//    console.log(this.loginForm.value);
//        }
  }
