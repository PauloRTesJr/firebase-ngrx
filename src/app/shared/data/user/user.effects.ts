import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as loginActions from '../../../modules/login/data/login/login.actions';
import * as userActions from './user.actions';
import { catchError, map, mergeMap, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}

  saveCredentialOnLoginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.loginSuccess),
      map((credential) => userActions.userLoggedIn(credential))
    )
  );
}
