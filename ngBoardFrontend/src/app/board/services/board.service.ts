import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { MOCK_BOARDS } from './boards.mock';

@Injectable()
export class BoardService {

  private selectedBoard: Board;
  private boards: Board[];

  constructor() {
    this.boards = MOCK_BOARDS;
  }

  getBoards = () => this.boards;

  setBoards(boards: Board[]) {
    this.boards = boards;
  }

  getBoard(boardId: number): Board {
    return this.boards.find((board) => board.getId() === boardId );
  }

  getSelectedBoard = () => this.selectedBoard;

  selectBoard(boardId: number) {
    this.selectedBoard = this.getBoards().find(b => b.getId() === boardId);
  }
}
