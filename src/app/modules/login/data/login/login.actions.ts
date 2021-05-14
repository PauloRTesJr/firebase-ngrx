import { createAction, props } from '@ngrx/store';
import * as constants from './login.constants';

export const loginRequest = createAction(constants.LOGIN_REQUESTED, props<{ email: string, password: string }>());
export const loginSuccess = createAction(constants.LOGIN_SUCCEEDED, props<{ token: string }>());
export const loginFail = createAction(constants.LOGIN_FAILED);