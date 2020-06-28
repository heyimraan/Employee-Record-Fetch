import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee} from './Student'
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSERVICEService {
  API="http://dummy.restapiexample.com/api/v1/employees";
  constructor(private http: HttpClient) { console.log(Observable);}
    getservice():Observable<Employee[]>{
      return this.http.get<Employee[]>(this.API);
    }


    // getservice():any{
    //     const obs = new Observable(observer=>{observer.next(this.API)});
    //     return obs;
    // }
      }
      

