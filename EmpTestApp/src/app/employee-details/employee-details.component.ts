import { Component, OnInit } from '@angular/core';
import { EmployeeDetail } from '../shared/employee-detail.model';
import { EmployeeDetailService } from '../shared/employee-detail.service';


 
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public service: EmployeeDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.service.getDepList();
  }
  
  populateForm(selectedRecord:EmployeeDetail)
  {
    //selectedRecord.departmentId=2;

    this.service.formData= Object.assign({},selectedRecord);
  }
  onDelete(id:Number)
  {
    this.service.deleteEmployeeDetail(id).subscribe(
      res =>{
        this.service.refreshList();
      },
      err =>{
        console.log(err);
      }
    );
  }

}
