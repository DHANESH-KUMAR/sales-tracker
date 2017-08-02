import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {EmployeeComponent} from './app.employee.component';
import {DashboardComponent} from './dashboard-component/app.dashboard.component';
import {AddEmployeeComponent} from './employee-add-component/app.add.employee.component';
import {EmployeeListComponent} from './employee-list-component/app.list.employee.component';
import {EmployeeService} from './employee-service/app.employee.service';

@NgModule({
  declarations: [DashboardComponent, AddEmployeeComponent, EmployeeListComponent, EmployeeComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [EmployeeService]
})
export class EmployeeModule {

}
