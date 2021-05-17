import { createAction, props } from '@ngrx/store';
import firebase from 'firebase';
import * as constants from './dashboard.constants';

export const dashboardRequest = createAction(
  constants.DASHBOARD_REQUESTED,
  props<{ email: string; password: string }>()
);
export const dashboardSuccess = createAction(
  constants.DASHBOARD_SUCCEEDED,
  props<{ credential: firebase.auth.UserCredential }>()
);
export const dashboardFail = createAction(constants.DASHBOARD_FAILED);
