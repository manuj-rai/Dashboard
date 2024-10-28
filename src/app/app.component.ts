import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ChartComponent,
    MapComponent,
    WidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Dashboard';
  isSidebarVisible = true;

  onSidebarToggle() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
  }
}
