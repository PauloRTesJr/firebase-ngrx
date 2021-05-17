import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss'],
})
export class DashboardScreenComponent {
  constructor(private store: Store) {}
}
