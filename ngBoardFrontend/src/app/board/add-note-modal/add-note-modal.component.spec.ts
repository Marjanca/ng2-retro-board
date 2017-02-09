import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddNoteModalComponent } from './add-note-modal.component';
import { ModalComponent } from './../../shared/modal/modal.component';
import { Note } from './../../note/models/note';

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

  it('should emit onNoteCreate event when Post button is clicked ', () => {
    let receivedNote: Note;
    component.noteCreated.subscribe(emittedNote => receivedNote = emittedNote);

    let expectedNote = new Note(1, 1, 'some text', 'some author', 100, 200, 1);
    component.boardId = expectedNote.boardId;
    component.noteText = expectedNote.text;

    component.onSubmit();

    expect(receivedNote.boardId).toBe(expectedNote.boardId);
    expect(receivedNote.text).toBe(expectedNote.text);
  });

  it('should reset noteText after closing modal', () => {
    component.noteText = 'Some note text';
    component.onClose();
    expect(component.noteText).toBe('');
  });
});
