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

    let expectedNote = new Note(1, 'some text', 'some author', 100, 200, 1);
    component.note = expectedNote;
    let postButton = fixture.debugElement.query(By.css('.data-test-post-button'));
    postButton.triggerEventHandler('click', null);

    expect(receivedNote).toBe(expectedNote);
  });

  it('should close modal when close button is clicked', () => {
    let modalDiv = fixture.debugElement.query(By.css('.data-test-modal-div'));
    modalDiv.nativeElement.style.display = 'block';

    let closeButton = fixture.debugElement.query(By.css('.data-test-close-button'));
    closeButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(modalDiv.nativeElement.style.display).toBe('none');
  });

  it('should close modal when is clicked outside of it', () => {
    let modalDiv = fixture.debugElement.query(By.css('.data-test-modal-div'));
    modalDiv.nativeElement.style.display = 'block';

    let mouseClickEvent = {
      target: modalDiv.nativeElement
    };
    modalDiv.triggerEventHandler('click', mouseClickEvent);

    fixture.detectChanges();

    expect(modalDiv.nativeElement.style.display).toBe('none');
  });

  it('should reset textarea content after closing modal', () => {
    component.note.text = 'Some note text';
    component.closeModal();
    expect(component.note.text).toBe('');
  });

});
