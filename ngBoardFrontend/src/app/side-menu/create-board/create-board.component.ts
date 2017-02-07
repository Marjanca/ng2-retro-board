import { Board } from './../../board/models/board';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {

  @Output() boardCreated: EventEmitter<Board> = new EventEmitter<any>();

  private boardTitle: string;

  onClose() {
    console.log("Create board closed.");
    this.resetDefaults();
  }

  onSubmit() {
    console.log("Board created");
    let board = new Board(0, this.boardTitle, '');
    console.dir(board);
    this.boardCreated.emit(board);
  }

  private resetDefaults() {
    this.boardTitle = '';
  }
}
