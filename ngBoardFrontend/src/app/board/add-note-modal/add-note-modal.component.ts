import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { NoteCoords } from './../../note/models/note-coords';
import { Note } from './../../note/models/note';
import { ModalComponent } from './../../shared/modal/modal.component';

function createDefaultNote(): Note {
  return new Note('', '<anonymous>', new NoteCoords(200, 250, 1000));
}

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.scss']
})
export class AddNoteModalComponent {

  @ViewChild('modal') modal: ModalComponent;

  @Output() noteCreated: EventEmitter<Note> = new EventEmitter();

  note: Note = createDefaultNote();

  public openModal() {
    this.modal.openModal();
  }

  onClose() {
    console.log('Add note modal closed.');
    this.note = createDefaultNote();
  }

  onSubmit() {
    console.log('Add note modal submited.');
    console.dir(this.note);
    this.noteCreated.emit(this.note);
  }
}
