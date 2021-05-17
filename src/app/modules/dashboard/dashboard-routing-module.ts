import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardScreenComponent } from './containers/dashboard-screen/dashboard-screen.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardScreenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
