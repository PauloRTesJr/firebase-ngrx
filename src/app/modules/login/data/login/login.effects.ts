import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { catchError, map, mergeMap, tap, switchMap } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import * as loginActions from './login.actions';
import * as userActions from '../../../../shared/data/user/user.actions';

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
      mergeMap((user) =>
        from(this.loginService.login(user)).pipe(
          tap((credential) => {
            console.log('Retrieved data from Firebase', credential);
          }),
          map((credential) => loginActions.loginSuccess({ credential })),
          catchError(() => of(loginActions.loginFail()))
        )
      )
    )
  );

  redirectAfterLoginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.loginSuccess),
      tap(() => {
        console.log('Login Success Effect');
        // this.router.navigateByUrl('/status');
      })
    )
  );
}
