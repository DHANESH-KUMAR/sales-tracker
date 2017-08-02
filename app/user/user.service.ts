import {Injectable, OnInit} from '@angular/core';
import {Headers, Http, JsonpModule, Response} from '@angular/http';
import {User} from './user.interface';
import "rxjs/Rx";

@Injectable()
export class UserService implements OnInit {
  constructor(private http: Http) {
  }

  ngOnInit() {

  }

  addUser(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://angular2-47a53.firebaseio.com/sales-tracker.json', body, {'headers': headers});
  }

  getUsers() {
    return this.http.get('https://angular2-47a53.firebaseio.com/sales-tracker.json').map((data: Response) => data.json());
  }
}
