/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { SideMenuComponent } from './side-menu.component';
import { BoardMenuItem } from './models/board-menu-item';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  let testBoards = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' }
  ];

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

    component.boards = testBoards;

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
    let sideMenuContracted = fixture.debugElement.query(By.css('.contracted'));
    expect(sideMenuContracted).toBeTruthy();
  });

  it('should contain correct board urls', () => {
    let nativeElement = fixture.nativeElement;
    let link = nativeElement.querySelectorAll('.side-menu-boards-list li a');

    let routePath = '/board/';
    expect(link[0].pathname).toEqual(`${routePath}${testBoards[0].id}`);
    expect(link[1].pathname).toEqual(`${routePath}${testBoards[1].id}`);
    expect(link[2].pathname).toEqual(`${routePath}${testBoards[2].id}`);
    // TODO: Mock router and assert here that it was called with correct param
    // http://stackoverflow.com/questions/41793405/unit-testing-routerlink-in-angular2-component
  });
});
