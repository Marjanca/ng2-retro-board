import { ModalComponent } from './../../shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateNoteComponent } from './create-note.component';
import { ModalComponent } from './../../shared/modal/modal.component';
import { Note } from './../../note/models/note';

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

  it('should emit onNoteCreate event when Post button is clicked ', () => {
    let receivedNote: Note;
    component.noteCreated.subscribe(emittedNote => receivedNote = emittedNote);

    let expectedNote = new Note(1, 1, 'some Text', 'some author', 100, 200, 1);
    component.BoardId = expectedNote.BoardId;
    component.NoteText = expectedNote.Text;

    component.onSubmit();

    expect(receivedNote.BoardId).toBe(expectedNote.BoardId);
    expect(receivedNote.Text).toBe(expectedNote.Text);
  });

  it('should reset NoteText after closing modal', () => {
    component.NoteText = 'Some note Text';
    component.onClose();
    expect(component.NoteText).toBe('');
  });
});
