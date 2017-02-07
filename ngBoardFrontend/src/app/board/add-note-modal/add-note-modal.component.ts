import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

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
    this.resetDefaults();
  }

  onSubmit() {
    let note = new Note(0, 0, this.noteText, '', 100, 200, 300);
    this.noteCreated.emit(note);
    this.resetDefaults();
  }

  private resetDefaults() {
    this.noteText = '';
  }
}
