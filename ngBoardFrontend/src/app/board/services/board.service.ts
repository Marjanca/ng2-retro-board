import { Injectable } from '@angular/core';

import { Board } from '../models/board';
import { NoteService } from '../../note/services/note.service';

@Injectable()
export class BoardService {
  private boards: Board[] = [
    new Board(1, 'January 2017', 'Sale'),
    new Board(2, 'March 2017', 'Masi')
  ];

  constructor(private noteService: NoteService) { }

  getBoards = () => this.boards;

  setBoards(boards: Board[]) {
    this.boards = boards;
  }

  getBoard(boardId: number): Board {
    let board = this.boards.find((tempBoard) => tempBoard.getId() === boardId );

    if (!board) {
      // TODO: No such board error
      return null;
    }

    // TODO: Optimize when integrated with backend to avoid two separate REST calls
    board.setNotes(this.noteService.getNotes(board.getId()));
    return board;
  }
}
