import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
    public auth: AngularFireAuth
  ) { }

  login(user: any) {
    console.log('Loggin in firebase with user: ', user);
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }
}
