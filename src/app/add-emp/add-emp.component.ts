import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements  OnInit {
  title = 'formgroups';
  date = new FormControl(new Date());
  myGroup!: any;  
  validate: any;
  FormArray: any={
    name: '',
    occupation: '',
    age: ''
  };
  mpid:any
  src: any;
  constructor(private formBuilder: FormBuilder,private api:ApiService,private router: Router ){

  }
ngOnInit(){
  this.generateId(); // Call the generateId() method to generate the employeId

  this.myGroup = new FormGroup({
  firstName: new FormControl("",Validators.required),
  lastName: new FormControl("",Validators.required),
  email: new FormControl("", [Validators.required, Validators.email] ),
  img: new FormControl(''),
  phonenum: new FormControl("", [Validators.required,Validators.minLength(10)]),
  password: new FormControl("",  [Validators.required, Validators.minLength(6)]),
  option: new FormControl("",Validators.required),
  joindate: new FormControl("", [Validators.required]),
  currentdate: (this.date),
  employeId: new FormControl(this.mpid),
  familymembers: new FormArray([ new FormControl("",Validators.required), ])
    });
     
  }
generateId() {
  const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
  this.mpid = randomNumber.toString();
  }

  
addEduction(){
  (<FormArray> this.myGroup.get('this.familymembers')).push(new FormControl('')
   )
  }
 
onSubmit(){
  this.api.postEmploye(this.myGroup.value).subscribe({
  next:(res)=>{
  alert("signup successfully")
  this.router.navigate(["../login"]);
  },
  error:()=>{
  alert("Error while signup the user")
  }   })

  console.warn(this.myGroup.value)
  
  }
 

onFileSelected(event: any) {
  if(event.target.files){
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload=(event)=>{
  this.src= event.target?.result;
  this.myGroup.get('img')?.setValue([this.src]);
 }
  }
  }
}

 