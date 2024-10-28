import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar', // or any chart type you want to use
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [65, 59, 80],
              backgroundColor: ['rgba(75, 192, 192, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)'],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true
        }
      });
    }
  }
}


