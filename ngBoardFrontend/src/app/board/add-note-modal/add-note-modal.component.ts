import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

import { NoteCoords } from '../../note/models/note-coords';
import { Note } from '../../note/models/note';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.scss']
})
export class AddNoteModalComponent {

  @ViewChild('modal') modal: ModalComponent;

  @Output() noteCreated: EventEmitter<Note> = new EventEmitter();

  noteText: string = '';

  public openModal() {
    this.modal.openModal();
  }

  onClose() {
    console.log('Add note modal closed.');
    this.resetDefaults();
  }

  onSubmit() {
    console.log('Add note modal submited.');
    let note = new Note(this.noteText, '', new NoteCoords(100, 200, 300));
    this.noteCreated.emit(note);
    console.dir(note);
  }

  private resetDefaults() {
    this.noteText = '';
  }
}
