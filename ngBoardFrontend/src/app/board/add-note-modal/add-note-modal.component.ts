import { Note } from './../../note/models/note';
import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.scss']
})
export class AddNoteModalComponent {

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('textarea') textArea: ElementRef;

  @Output() onNoteCreated = new EventEmitter<Note>();

  note: Note = new Note(0, '', '<anonymous>', 150, 250, 1);

  constructor() { }

  private clearTextArea() {
    // this.textArea.nativeElement.value = '';
    this.note = new Note(0, '', '<anonymous>', 150, 250, 1);
  }

  openModal() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.clearTextArea();
    this.modal.nativeElement.style.display = 'none';
  }

  checkForClosing(targetElement) {
    if (targetElement === this.modal.nativeElement) {
      this.closeModal();
    }
  }

  createNote() {

    if (this.note.text.length === 0) {
      return;
    }

    this.onNoteCreated.emit(this.note);

    this.closeModal();
  }

}
