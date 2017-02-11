
import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteCoords } from './../../note/models/note-coords';
import { Note } from './../../note/models/note';
import { ModalComponent } from './../../shared/modal/modal.component';
import { CreateNoteComponent } from './create-note.component';

describe('AddNoteModalComponent', () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [CreateNoteComponent, ModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a board when onSubmit is called', () => {
    component.NoteText = 'Note Text';
    component.onSubmit();

    let expectedNote = new Note('Note Text', '', new NoteCoords(100, 200, 300));
    component.NoteCreated.subscribe(note => {
      expect(note).toEqual(expectedNote);
    });
  });
});
