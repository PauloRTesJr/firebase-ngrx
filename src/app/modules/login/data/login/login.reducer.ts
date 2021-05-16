import { createReducer, on } from "@ngrx/store";
import firebase from 'firebase';
import { loginFail, loginRequest, loginSuccess } from "./login.actions";

export type LoginState = {
  email: string,
  password: string,
  credential: firebase.auth.UserCredential
}

export const initialState: LoginState = {
  email: '',
  password: '',
  credential: { credential: null, user: null, additionalUserInfo: null, operationType: null }
};

const _loginReducer = createReducer(
  initialState,
  on(loginRequest, (state) => state),
  on(loginSuccess, (state) => state),
  on(loginFail, (state) => state),
);

export function loginReducer(state: any, action: any) {
  return _loginReducer(state, action);
}