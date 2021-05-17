import { createReducer, on } from '@ngrx/store';
import firebase from 'firebase';
import { loginFail, loginRequest, loginSuccess } from './login.actions';

export type LoginState = {
  email: string;
  password: string;
};

export const initialState: LoginState = {
  email: '',
  password: '',
};

const _loginReducer = createReducer(
  initialState,
  on(loginRequest, (state) => state),
  on(loginSuccess, (state) => state),
  on(loginFail, (state) => state)
);

export function loginReducer(state: any, action: any) {
  return _loginReducer(state, action);
}
