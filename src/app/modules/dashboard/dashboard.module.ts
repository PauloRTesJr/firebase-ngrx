import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardComponent } from './dashboard.component';
import { DashboardScreenComponent } from './containers/dashboard-screen/dashboard-screen.component';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { DashboardEffects } from './data/dashboard/dashboard.effects';
import { dashboardReducer } from './data/dashboard/dashboard.reducer';

@NgModule({
  declarations: [DashboardComponent, DashboardScreenComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
})
export class DashboardModule {}
