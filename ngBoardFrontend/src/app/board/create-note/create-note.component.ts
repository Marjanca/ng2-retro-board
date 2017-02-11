import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

import { NoteCoords } from './../../note/models/note-coords';
import { Note } from './../../note/models/note';
import { ModalComponent } from './../../shared/modal/modal.component';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {

  @ViewChild('modal')
  private modal: ModalComponent;

  @Output()
  private noteCreated: EventEmitter<Note> = new EventEmitter<Note>();

  private noteText: string = '';

  get NoteText() {
    return this.noteText;
  }

  set NoteText(noteText: string) {
    this.noteText = noteText;
  }

  get NoteCreated() {
    return this.noteCreated;
  }

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
