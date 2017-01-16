import { Component, ViewChild, OnInit } from '@angular/core';

import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';
import { Board } from './models/board';
import { BoardService } from './services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // @Input() board: Board;
  private board: Board;
  @ViewChild('addNoteModal') addNoteModal: AddNoteModalComponent;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.board = this.boardService.getBoard(1);
  }

  getBoard = () => this.board;

  setBoard(board: Board) {
    this.board = board;
  }

  openAddNoteModal() {
    this.addNoteModal.openModal();
  }

  // onNoteCreated(note) {
  //   this.board.getNotes().push(note);
  // }
}
