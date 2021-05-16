import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, from, of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { LoginService } from "../../services/login.service";
import * as loginActions from './login.actions';
import * as userActions from '../../../../shared/data/user/user.actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.loginRequest),
      mergeMap((user) => from(this.loginService.login(user)).pipe(
        map((credential) => {
          console.log(credential);
          return userActions.userLoggedIn(credential)
        }),
        catchError(() => ofType(loginActions.loginRequest)),
      ))
    ));

  redirectAfterLoginSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(loginActions.loginSuccess),
      tap(() => {
        this.router.navigateByUrl('/status');
      })
    ),
    { dispatch: false }
  )

}