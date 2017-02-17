import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

import { Note } from '../../note/models/note';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {

  @ViewChild('modal') modal: ModalComponent;

  @Output()
  private noteCreated: EventEmitter<Note> = new EventEmitter<Note>();

  private boardId: number;
  private noteText: string = '';
  private top: number = 100;
  private left: number = 200;

  get Top() {
    return this.top;
  }

  get Left() {
    return this.left;
  }

  get BoardId() {
    return this.boardId;
  }

  set BoardId(boardId: number) {
    this.boardId = boardId;
  }

  get NoteText() {
    return this.noteText;
  }

  set NoteText(noteText: string) {
    this.noteText = noteText;
  }

  get NoteCreated() {
    return this.noteCreated;
  }

 public openModal(boardId: number, noteTop: number, noteLeft: number) {
    this.boardId = boardId;
    this.top = noteTop;
    this.left = noteLeft;
    this.modal.openModal();
  }

  onClose() {
    console.log('Add note modal closed.');
    this.resetDefaults();
  }

  onSubmit() {
    let note = new Note(0, this.boardId, this.noteText, '', this.top, this.left, 300);
    this.noteCreated.emit(note);
    this.resetDefaults();
  }

  private resetDefaults() {
    this.noteText = '';
    this.top = 100;
    this.left = 200;
  }
}
