import { Injectable } from '@angular/core';
import { EmployeeDetail } from './employee-detail.model';
import{ HttpClient} from "@angular/common/http";
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http:HttpClient) { }

  formData:EmployeeDetail = new EmployeeDetail();
readonly baseUrl='https://localhost:44382/api/Employees';


//readonly obj1:string="{'firstName': 'Test 1','lastName': 'Test','gender': 'M','dob':'1980-01-01','departmentId': '1','basicSalary': '1522.00'}";
formData1:EmployeeDetail = new EmployeeDetail();
  postEmployeeDetail(){
    //console.log(this.formData);

   //return this.http.post(this.baseUrl,this.formData);
   return this.http.post(this.baseUrl,this.formData);
  }
}
