import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() title!: string;
  @Input() value!: string;
}

