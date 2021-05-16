import { createAction, props } from '@ngrx/store';
import * as constants from './user.constants';
import firebase from 'firebase';

export const userLoggedIn = createAction(constants.USER_LOGGEDIN,
    props<{
        user: firebase.User | null,
        credential: firebase.auth.AuthCredential | null
    }>()
);
export const getUser = createAction(constants.USER_GETUSER,
    props<{
        user: firebase.User | null,
        credential: firebase.auth.AuthCredential | null
    }>()
);