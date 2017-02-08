import { NoteCoords } from './../../note/models/note-coords';
import { Note } from './../../note/models/note';
import { ModalComponent } from './../../shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddNoteModalComponent } from './add-note-modal.component';

describe('AddNoteModalComponent', () => {
  let component: AddNoteModalComponent;
  let fixture: ComponentFixture<AddNoteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [AddNoteModalComponent, ModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a board when onSubmit is called', () => {
    component.noteText = 'Note Text';
    component.onSubmit();

    let expectedNote = new Note(this.noteText, '', new NoteCoords(100, 200, 300));
    component.noteCreated.subscribe(note => {
      let areEqual = (note == expectedNote);
      expect(areEqual).toBeTruthy();
    });
  });
});
