import {Component, Input, Output, OnChanges, OnInit, SimpleChanges, EventEmitter} from '@angular/core';
import {EmployeeService} from '../employee-service/app.employee.service';
import {Employee} from '../employee-service/app.employee';

@Component({
  selector: 'st-add-employee-component',
  templateUrl: './app.add.employee.component.html'
})
export class AddEmployeeComponent implements OnChanges, OnInit {
  @Input() employee: Employee;
  @Output() onEmployeeModified: EventEmitter<Employee> = new EventEmitter<Employee>();
  public isAdded: boolean;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.isAdded = true;
    this.employee = new Employee(null, null);
  }

  public onSubmit(Form): void {
    let value = Form.value;
    if (!this.isAdded) {
      this.employeeService.modifyEmployee(this.employee, new Employee(value.name, value.email));
      this.clear();
      this.onEmployeeModified.emit(this.employee);
    } else {
      this.employeeService.addEmployee(new Employee(value.name, value.email)).subscribe(x => console.log(x));

      Form.reset();
      this.clear();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('employee')) {
      if (changes['employee'].currentValue != undefined && changes['employee'].currentValue['name'] != undefined) {
        this.isAdded = false;
      }
    }
  }

  clear(): void {
    this.isAdded = true;
    this.employee = new Employee(null, null);
  }

  onDeleted(employee): void {
    this.employeeService.deleteEmployee(employee);
    this.clear();
  }
}
