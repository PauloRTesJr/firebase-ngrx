import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { LoginService } from "../../services/login.service";
import * as loginActions from './login.actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.loginRequest),
      mergeMap((user) => this.loginService.login(user).pipe(
        map(({ token }) => loginActions.loginSuccess({ token })),
        catchError(() => EMPTY),
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