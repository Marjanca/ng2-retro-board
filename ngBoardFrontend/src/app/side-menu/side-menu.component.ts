import { Component, Input, ViewChild } from '@angular/core';

import { CreateBoardComponent } from './create-board/create-board.component';
import { BoardMenuItem } from './models/board-menu-item';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  @ViewChild('createBoardModal') createBoardModal: CreateBoardComponent;
  @Input() boards: BoardMenuItem[];

  sideMenuOpened: boolean = true;

  toggleSideMenu() {
    this.sideMenuOpened = !this.sideMenuOpened;
  }

  openCreateBoardModal() {
    this.createBoardModal.openModal();
  }
}
