import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements AfterViewInit {
  @ViewChild('sideBarMenu') sideBarMenu;

  ngAfterViewInit() {
    this.sideBarMenu.nativeElement.style.left = '0';
  }

  close() {
    this.sideBarMenu.nativeElement.style.left = '-240px';
  }
}
