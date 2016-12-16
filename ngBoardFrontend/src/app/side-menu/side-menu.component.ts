import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements AfterViewInit {
  @ViewChild('sideBarMenu') sideBarMenu;

  sideMenuOpened: boolean = true;
  sideMenuButtonText: string = '<';

  ngAfterViewInit() {
    this.sideBarMenu.nativeElement.style.left = '0';
  }

  sideMenu() {

    if (this.sideMenuOpened) {
      this.sideMenuButtonText = '>';
      this.sideBarMenu.nativeElement.style.left = '-230px';
    } else {
      this.sideMenuButtonText = '<';
      this.sideBarMenu.nativeElement.style.left = '0';
    }

    this.sideMenuOpened = !this.sideMenuOpened;
  }
}
