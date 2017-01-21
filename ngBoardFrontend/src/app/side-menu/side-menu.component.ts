import { Component, Input } from '@angular/core';

import { BoardMenuItem } from './models/board-menu-item';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  @Input() boards: BoardMenuItem[];

  sideMenuOpened: boolean = true;

  toggleSideMenu() {
    this.sideMenuOpened = !this.sideMenuOpened;
  }
}
