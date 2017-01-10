import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BoardMenuItem } from './models/board-menu-item';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  @Input() boards: BoardMenuItem[];
  @Output() menuClicked = new EventEmitter<BoardMenuItem>();

  sideMenuOpened: boolean = true;

  toggleSideMenu() {
    this.sideMenuOpened = !this.sideMenuOpened;
  }

  itemClicked(item: BoardMenuItem) {
    this.menuClicked.emit(item);
  }
}
