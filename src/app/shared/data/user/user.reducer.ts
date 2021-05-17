import { createReducer, on } from '@ngrx/store';
import firebase from 'firebase';
import { getUser, userLoggedIn } from './user.actions';

export type UserState = {
  credential: firebase.auth.UserCredential | null;
};

export const initialState: UserState = {
  credential: null,
};

const _userReducer = createReducer(
  initialState,
  on(getUser, (state) => state),
  on(userLoggedIn, (state) => {
    console.log('User Logged In action: ', state);
    return state;
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
