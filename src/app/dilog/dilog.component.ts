import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dilog',
  templateUrl: './dilog.component.html',
  styleUrls: ['./dilog.component.css']
})
export class DilogComponent  {
  myGroup!: any;  
  employe:any;
  constructor(private route: ActivatedRoute,private router:Router,private api:ApiService ) { }
 ngOnInit() {
    this.route.paramMap.subscribe((param)=>{
      let id = (param.get('id'));
      this.getbyEmployeId(id); 
     })
     
 }
    
getbyEmployeId(id:any){
 this.api.edit(id).subscribe((data)=>{
  console.log(data);
  this.employe = data
  console.log('data',this.employe)
  
      })
     }
updateemploye() {
      this.api.update(this.employe).subscribe({
        next:()=>{
          this.router.navigate(['all-emp']);
  
  console.log('updated')
        },
        error:(er: any)=>{
          console.log(er)
        }
      })
    }
}
 