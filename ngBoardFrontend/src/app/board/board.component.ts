import { Note } from './../note/models/note';
import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';
import { Component, Input, ViewChild } from '@angular/core';
import { Board } from './models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() board: Board;
  @ViewChild('addNoteModal') addNoteModal: AddNoteModalComponent;

  openAddNoteModal() {
    this.addNoteModal.openModal();
  }

  onNoteCreated(note: Note) {
    this.board.getNotes().push(note);
  }
}
