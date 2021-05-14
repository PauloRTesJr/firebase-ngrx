import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: any) {
    console.log(user);
    return this.http.post('/auth', user) as Observable<{ token: string }>;
  }
}
