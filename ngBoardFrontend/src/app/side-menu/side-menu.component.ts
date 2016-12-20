import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  @Input() menuItems: string[];
  @Input() otherItems: string[];
  @Output() menuClicked = new EventEmitter<string>(); 
  sideMenuOpened: boolean = true;
  sideMenuButtonText: string = '<';
  sideMenuExpanded = 'sideMenu expanded';
  sideMenuContracted = 'sideMenu contracted';

  sideMenuClasses: string = this.sideMenuExpanded;

  sideMenu() {
    this.sideMenuClasses = this.sideMenuOpened ? this.sideMenuContracted : this.sideMenuExpanded;
    this.sideMenuButtonText = this.sideMenuOpened ? '>' : '<';

    this.sideMenuOpened = !this.sideMenuOpened;
  }

  itemClicked(item: string) {
    this.menuClicked.emit(item);
  }
}
