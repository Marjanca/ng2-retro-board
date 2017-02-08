import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

import { ModalComponent } from './../../shared/modal/modal.component';
import { Board } from './../../board/models/board';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {

  @ViewChild('modal') modal: ModalComponent;

  @Output() boardCreated: EventEmitter<Board> = new EventEmitter<any>();

  boardTitle: string = '';

  openModal() {
    this.modal.openModal();
  }

  onClose() {
    console.log('Create board closed.');
    this.resetDefaults();
  }

  onSubmit() {
    console.log('Board created');
    let board = new Board(0, this.boardTitle, '');
    console.dir(board);
    this.boardCreated.emit(board);
  }

  private resetDefaults() {
    this.boardTitle = '';
  }
}
