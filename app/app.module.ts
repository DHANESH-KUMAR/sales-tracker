import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './app-header-component/app.header.component';


import {UserModule} from './user/user.module';
import {EmployeeModule} from './employee/app.employee.module';
import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpModule, UserModule, EmployeeModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
