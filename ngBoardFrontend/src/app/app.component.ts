import { Component, OnInit } from '@angular/core';
import { BoardMenuItem } from './side-menu/models/board-menu-item';
import { BoardService } from './board/board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  // Bootstrapping of the app.
  ngOnInit() {
    this.boardService.selectBoard(this.boardService.getBoards()[0].getId());
  }

  getBoardMenuItems = () => this.boardService.getBoards().map(board => new BoardMenuItem(board.getId(), board.getTitle()));

  getBoard = (boardId: number) => this.boardService.getBoards().find(board => board.getId() === boardId);

  setActiveBoard(boardId: number) {
    this.boardService.selectBoard(boardId);
  }

  menuItemClicked(item: BoardMenuItem) {
    this.setActiveBoard(item.id);
  }

}
