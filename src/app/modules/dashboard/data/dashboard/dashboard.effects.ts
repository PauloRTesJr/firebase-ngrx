import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private router: Router) {}

  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loginActions.loginRequest),
  //     mergeMap((user) =>
  //       from(this.loginService.login(user)).pipe(
  //         map((credential) => loginActions.loginSuccess({ credential })),
  //         catchError(() => of(loginActions.loginFail()))
  //       )
  //     )
  //   )
  // );
}
