import { createAction, props } from '@ngrx/store';
import * as constants from './user.constants';
import firebase from 'firebase';

export const userLoggedIn = createAction(
  constants.USER_LOGGEDIN,
  props<{
    credential: firebase.auth.UserCredential | null;
  }>()
);
export const getUser = createAction(
  constants.USER_GETUSER,
  props<{
    credential: firebase.auth.UserCredential | null;
  }>()
);
