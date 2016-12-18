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
  sideMenuExpanded = 'sideMenu expanded';
  sideMenuContracted = 'sideMenu contracted';

  sideMenuClasses: string = this.sideMenuExpanded;

  // ngAfterViewInit() {
  //   this.sideBarMenu.nativeElement.style.left = '0';
  // }

  sideMenu() {
    this.sideMenuClasses = this.sideMenuOpened ? this.sideMenuContracted : this.sideMenuExpanded;
    this.sideMenuButtonText = this.sideMenuOpened ? '>' : '<';

    this.sideMenuOpened = !this.sideMenuOpened;
  }
}
