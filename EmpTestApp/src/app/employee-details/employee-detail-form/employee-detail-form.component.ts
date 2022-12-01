import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throws } from 'assert';
import { EmployeeDetail } from 'src/app/shared/employee-detail.model';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';



@Component({
  selector: 'app-employee-detail-form',
  templateUrl: './employee-detail-form.component.html',
  styles: [
  ]
})
export class EmployeeDetailFormComponent implements OnInit {

  constructor( public service:EmployeeDetailService) { }

  ngOnInit(): void {
  }

  selectedDep:number=0;
  
  selectChangeHandler(event:any){
    //this.selectDip=event.target.value;
    this.service.formData.departmentId=Number(event.target.value);
  }
  
  onSubmit(form:NgForm){
    //this.service.postEmployeeDetail();
    if (this.service.formData.id==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);

    }

insertRecord(form: NgForm)
{
  this.service.postEmployeeDetail().subscribe(
    res =>{
      this.resetForm(form);
      this.service.refreshList();
    },
    err =>{
      console.log(err);
    }
  );
}
updateRecord(form: NgForm){
  this.service.putEmployeeDetail().subscribe(
    res =>{
      this.resetForm(form);
      this.service.refreshList();
    },
    err =>{
      console.log(err);
    }
  );
}



  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData= new EmployeeDetail();
  }

}
