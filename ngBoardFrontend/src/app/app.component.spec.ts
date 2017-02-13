/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BoardModule } from './board/board.module';
import { SideMenuModule } from './side-menu/side-menu.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NoteComponent } from './note/note.component';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BoardModule,
        RouterTestingModule,
        SideMenuModule,
        LoginModule
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should get board menu items when getBoardMenuItems called', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.componentInstance;
    expect(app.getBoardMenuItems().length).toBe(2);
    expect(app.getBoardMenuItems()[0].id).toBe(1);
    expect(app.getBoardMenuItems()[0].name).toBe('January 2017');
    expect(app.getBoardMenuItems()[1].id).toBe(2);
    expect(app.getBoardMenuItems()[1].name).toBe('March 2017');
  }));
});
