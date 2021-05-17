import { createReducer, on } from '@ngrx/store';
import {
  dashboardFail,
  dashboardRequest,
  dashboardSuccess,
} from './dashboard.actions';

export type DashboardState = {
  email: string;
  password: string;
};

export const initialState: DashboardState = {
  email: '',
  password: '',
};

const _dashboardReducer = createReducer(
  initialState,
  on(dashboardRequest, (state) => state),
  on(dashboardSuccess, (state) => state),
  on(dashboardFail, (state) => state)
);

export function dashboardReducer(state: any, action: any) {
  return _dashboardReducer(state, action);
}
