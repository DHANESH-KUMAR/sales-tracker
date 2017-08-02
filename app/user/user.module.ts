import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";


import {UserComponent} from './user.component';
import {UserService} from './user.service';


@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpModule],
  providers: [UserService]

})
export class UserModule {

}
