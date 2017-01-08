/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteComponent } from './note.component';
import { Note } from './models/note';
import { NoteCoords } from './models/note-coords';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;
  let note: Note;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    component.note = new Note('text', 'author', new NoteCoords(0, 0, 0));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a div tag', async(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').innerText).toBe('text');
  }));
});
