import { Component, Input  } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 @Input() isSidebarVisible: boolean = true;
  activeMenu: string = 'Dashboard'; // Default active menu

  setActiveMenu(menu: string) {
    this.activeMenu = menu; // Update the active menu
  }
 }
