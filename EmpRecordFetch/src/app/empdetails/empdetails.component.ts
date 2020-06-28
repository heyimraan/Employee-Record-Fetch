import { Component, OnInit } from '@angular/core';
import { EmployeeSERVICEService } from '../employee-service.service';
import { Employee } from '../Student';


@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EMPdetailsComponent implements OnInit {

    arraydata:Employee[]=[];
  constructor(private empservice:EmployeeSERVICEService) { }
  ngOnInit(){
      this.empservice.getservice().subscribe((data:Employee[])=> this.arraydata = data['data']);
  }

  // ngOnInit(){
  //   this.empservice.getservice().map((res:Response)=>res.json()).subscribe(data=>{this.arraydata = data},err=>console.error(err),()=>console.log('done with all stuff'));
  // }
  

}
