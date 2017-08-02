import {Component} from '@angular/core';
import {Employee} from './employee-service/app.employee';

@Component({
  selector: 'st-employee-component',
  templateUrl: './app.employee.component.html'
})

export class EmployeeComponent {

  selectedEmployee: Employee;

  onEmployeeSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
