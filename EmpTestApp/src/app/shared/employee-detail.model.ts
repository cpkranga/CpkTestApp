import { DepartmentDetail } from "./department-detail.model";

export class EmployeeDetail {
    id:Number=0;
    firstName:string='';
    lastName:string='';
    gender:string='';
    dOB:Date=new Date(1980,1,1);
    departmentId:number=0;
    //depList:DepartmentDetail[]=[];
    depName:string='';
    basicSalary:number=0;

    
}
