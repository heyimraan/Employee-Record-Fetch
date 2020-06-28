import { Component } from '@angular/core';
import { observable } from 'rxjs';
import {EmployeeSERVICEService} from './employee-service.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable';
  constructor(private empservice:EmployeeSERVICEService){}
  Emparray:any=[];
  ngOnInit(){
     //this.empservice.calledAPImethod().subscribe(data=> this.Emparray = data ); 
    //  this.empservice.getdata().subscribe(data=> this.Emparray = data ); 
    //  console.log(this.Emparray);
  }
  
}
