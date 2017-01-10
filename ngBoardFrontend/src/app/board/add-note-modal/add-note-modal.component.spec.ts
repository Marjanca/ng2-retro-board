import { NoteCoords } from './../../note/models/note-coords';
import { Note } from './../../note/models/note';
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
      declarations: [AddNoteModalComponent]
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
    let receivedNote;
    component.onNoteCreated.subscribe(emittedNote => receivedNote = emittedNote);

    let expectedNote = new Note('some text', 'some author', new NoteCoords(100, 200, 1));
    component.note = expectedNote;
    
    let postButton = fixture.debugElement.query(By.css('.data-test-post-button'));
    postButton.triggerEventHandler('click', null);

    expect(receivedNote).toBe(expectedNote);
  });

});
