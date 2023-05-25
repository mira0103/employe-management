import { Component , OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DilogComponent } from '../dilog/dilog.component';


@Component({
  selector: 'app-all-emp',
  templateUrl: './all-emp.component.html',
  styleUrls: ['./all-emp.component.css']
})
export class AllEmpComponent implements OnInit{
  displayedColumns: string[] = ['employeId', 'firstName', 'lastName','email', 'joindate','currentdate','action'];
  dataSource!: MatTableDataSource<any>;
  msg="";
  role:any;
  @ViewChild(MatSort) sort!: MatSort;


constructor(private api:ApiService,private router: Router , private  authService: AuthService,public dialog: MatDialog
 ){ } public currentUser: any;
ngOnInit(): void {
  this.role = localStorage.getItem('option'); 
      this.getAllEmploye();
    if (!this.authService.isLoggedIn()) {
    this.router.navigate(['/login']);
    }
  }
openDialog() {
    this.dialog.open(DilogComponent);
  }
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
getAllEmploye(){
    this.api.getEmploye()
    .subscribe({
    next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.sort = this.sort
     
  }, 
    error:(err)=>{
    alert("Error while fetching the Records!!")
    }
    })
  }
// editEmploye(row:any){ 
//   this.dialog.open(DilogComponent,{
//     data:row.id
//   }).afterClosed().subscribe(val=>{
//     if(val==='update'){
//       this.getAllEmploye();
//     }
//   })

   
//  }
deleteEmploye(id: any){
    this.api.deleteEmploye(id)
    .subscribe({
    next:(res)=>{
    alert("employe Deleted Successfully" )
    },
    error:()=>{
    alert("Error while deleting the employe!!")
    }
    })
 }
 logout(){
  localStorage.clear();
  alert('Are you sure you want to logout')
  this.router.navigate(['login']);
}

    
}
