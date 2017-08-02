import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './employee/dashboard-component/app.dashboard.component';
import {EmployeeComponent} from './employee/app.employee.component';
import {UserComponent} from './user/user.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: "full"},
  {path: 'dashboard', component: DashboardComponent, pathMatch: "full"},
  {path: 'user', component: UserComponent, pathMatch: "full"},
  {path: 'employee', component: EmployeeComponent, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
