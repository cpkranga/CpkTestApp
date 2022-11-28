import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmit(form:NgForm){
    //this.service.postEmployeeDetail();

console.log('run untill this poitn');

    this.service.postEmployeeDetail().subscribe(
      res =>{

      },
      err => {console.log(err);}
    );
    }
}
