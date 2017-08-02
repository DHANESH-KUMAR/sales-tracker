import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './user.interface';
import {UserService} from './user.service';


@Component({
  selector: 'st-user',
  templateUrl: 'user.component.html',
  providers: [UserService]

})
export class UserComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  userList: User[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService) {

  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(5)]],
      'address': this.formBuilder.group({
        'street': ['', Validators.required],
        'postcode': ['']
      })
    });
    this.loadUser();
  }

  save(model1: User, isValid: boolean): void {
    this.submitted = true;
    this.userService.addUser(model1).subscribe((data: any) => {
      console.log(data)
      this.loadUser();
      this.myForm.reset();
    }, (error) => {
      console.log(error);
    });
  }

  deleteUser(obj: any) {
    console.warn('delete');
  }

  editUser(obj: User) {
    console.log(obj);
    this.myForm = this.formBuilder.group({
      'name': [obj.name],
      'address': this.formBuilder.group({
        'street': [obj.address.street],
        'postcode': [obj.address.postcode],
      })
    })
    console.warn('edit');
  }

  cancelUser() {
    console.warn('cancel')
    this.myForm.reset();
  }

  private loadUser() {
    this.userService.getUsers().subscribe((data: any[]) => {
      const tempArray = [];
      for (let i in data) {
        tempArray.push(data[i]);
      }
      this.userList = tempArray;
    });
  }
}
