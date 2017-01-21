/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { SideMenuComponent } from './side-menu.component';
import { BoardMenuItem } from './models/board-menu-item';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideMenuComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;

    component.boards = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show three board menu items', () => {
    let menuitems = fixture.debugElement.queryAll(By.css('.side-menu-boards-list li'));
    expect(menuitems.length).toBe(3);
  });

  it('should show sidemenu on start', () => {
    let sideMenuExpanded = fixture.debugElement.query(By.css('.expanded'));
    expect(sideMenuExpanded).toBeTruthy();
  });

  it('should close sidemenu on when toggleSideMenu called', () => {
    component.toggleSideMenu();
    fixture.detectChanges();
    let sideMenuExpanded = fixture.debugElement.query(By.css('.contracted'));
    expect(sideMenuExpanded).toBeTruthy();
  });

  it('should emit menu item on menu clicked', () => {
    let nativeElement = fixture.nativeElement;
    let link = nativeElement.querySelector('.side-menu-boards-list li a');
    link.click();
    // TODO: Mock router and assert here that it was called with correct param

    fixture.detectChanges();
  });
});
