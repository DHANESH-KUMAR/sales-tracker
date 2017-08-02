import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {EmployeeService} from '../employee-service/app.employee.service';
import {Employee} from '../employee-service/app.employee';

@Component({
  selector: 'st-list-employee-component',
  templateUrl: './app.list.employee.component.html'
})

export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  selectedItem: Employee;
  @Output() onEmployeeItemSelected: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private empService: EmployeeService) {
  }

  ngOnInit() {
    this.empService.getEmployee().subscribe(data => this.employeeList = data);
  }

  onSelect(employee: Employee): void {
    if (employee != null) {
      this.selectedItem = employee;
      this.onEmployeeItemSelected.emit(employee);
    }
  }
}
