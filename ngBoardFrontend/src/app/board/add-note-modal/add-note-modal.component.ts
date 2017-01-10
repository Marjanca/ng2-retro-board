import { NoteCoords } from './../../note/models/note-coords';
import { Note } from './../../note/models/note';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.scss']
})
export class AddNoteModalComponent {

  @Output()
  onNoteCreated = new EventEmitter<Note>();

  constructor() { }

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('textarea') textArea: ElementRef;

  private clearTextArea() {
    this.textArea.nativeElement.value = '';
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
    let noteText: string = this.textArea.nativeElement.value;

    if (noteText.length === 0) {
      return;
    }

    let note = new Note(noteText, '<none>', new NoteCoords(320, 500, 1));
    this.onNoteCreated.emit(note);

    this.closeModal();
  }

}
