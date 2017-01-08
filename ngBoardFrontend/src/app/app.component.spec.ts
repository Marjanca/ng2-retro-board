/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NoteComponent } from './note/note.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NoteComponent,
        SideMenuComponent
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
