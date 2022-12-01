import { Injectable } from '@angular/core';
import { EmployeeDetail } from './employee-detail.model';
import{ HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { DepartmentDetail } from './department-detail.model';

 
@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  
  
  constructor(private http:HttpClient) { }

  formData:EmployeeDetail = new EmployeeDetail();
  list : EmployeeDetail [];
  depList : DepartmentDetail[];
  selectedObject : DepartmentDetail;
  readonly baseUrl='https://localhost:44382/api';

  //test:EmployeeDetail = new EmployeeDetail();

//readonly obj1:string="{'firstName': 'Test 1','lastName': 'Test','gender': 'M','dob':'1980-01-01','departmentId': '1','basicSalary': '1522.00'}";
//formData1:EmployeeDetail = new EmployeeDetail();
  postEmployeeDetail(){
    //console.log(this.formData);

    
   return  this.http.post(this.baseUrl+'/Employees/',this.formData);
  }
  putEmployeeDetail(){
    //console.log(this.formData);
    //console.log(this.formData);
    
   return  this.http.put(`${this.baseUrl+'/Employees'}/${this.formData.id}`,this.formData);
  }
  deleteEmployeeDetail(id:Number){
    //console.log(this.formData);
    //console.log(this.formData);
    
   return  this.http.delete(`${this.baseUrl+'/Employees'}/${id}`);
  }
  refreshList(){
    this.http.get(this.baseUrl+'/Employees/')
    .toPromise()
    .then(res => this.list = res as EmployeeDetail[]);


  }
  getDepList(){
    this.http.get(this.baseUrl+'/Departments/')
    .toPromise()
    .then(res => this.depList = res as DepartmentDetail[]);

  }


  

}
