import { Component /*, AfterViewInit, ViewChild*/ } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent /* implements AfterViewInit */ {
  // @ViewChild('sideBarMenu') sideBarMenu;

  sideMenuOpened: boolean = true;
  sideMenuButtonText: string = '<';
  sideMenuClasses: string = 'sideMenu expanded';

  // ngAfterViewInit() {
  //   this.sideBarMenu.nativeElement.style.left = '0';
  // }

  sideMenu() {
    if (this.sideMenuOpened) {
      this.sideMenuButtonText = '>';
      this.sideMenuClasses = 'sideMenu contracted';
    } else {
      this.sideMenuButtonText = '<';
      this.sideMenuClasses = 'sideMenu expanded';
    }

    this.sideMenuOpened = !this.sideMenuOpened;
  }
}
