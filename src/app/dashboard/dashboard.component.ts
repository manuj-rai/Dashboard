import { Component } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { ChartComponent } from '../chart/chart.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [WidgetComponent, ChartComponent, MapComponent]
})
export class DashboardComponent { }

