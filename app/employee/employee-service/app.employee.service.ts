import {Employee} from './app.employee';
import {Injectable} from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private employeeList: Employee [];

  constructor(private http: Http) {
  }

  // public getEmployee(): Employee[] {
  //   return this.employeeList;
  // }
  private getHeaders(): Headers {
    const headers = new Headers();
    headers.append('Accept', 'Application/json');
    return headers;
  }

  public getEmployee() {
    return this.http.get('http://localhost:3000/data/', {'headers': this.getHeaders()}).map((res: Response) => res.json());
  }

  public addEmployee(employee: Employee) {
    const e1 = new Employee(employee.name, employee.email)
    e1.id = 6;
    return this.http.post('http://localhost:3000/data/', e1).map((res: Response) => res.json());
  }

  public modifyEmployee(oldEmployee: Employee, newEmployee: Employee): boolean {
    this.employeeList[this.employeeList.indexOf(oldEmployee)] = newEmployee;
    return true;
  }

  public deleteEmployee(employee: Employee): boolean {
    this.employeeList.splice(this.employeeList.indexOf(employee), 1);
    return true;
  }

}
