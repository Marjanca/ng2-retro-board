import { Component, OnInit } from '@angular/core';
import { BoardMenuItem } from './side-menu/models/boardMenuItem';
import { Board } from './board/models/board';
import { Note } from './note/models/note';
import { NoteCoords } from './note/models/note-coords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private boardMenuItems: BoardMenuItem[];
  private boards: Board[] = [];

  ngOnInit() {
    this.setupMockData();
    this.boardMenuItems = this.boards.map((board) => {
      return { id: board.Id, name: board.Title };
    });
  }

  menuItemClicked(item: BoardMenuItem) {
    console.log(item);
  }

  setupMockData() {
    let firstBoardNotes = [
       {text: 'first note', author: 'first author', coords: new NoteCoords(100, 100, 0)},
       {text: 'second note', author: 'second author', coords: new NoteCoords(200, 200, 0)},
       {text: 'third note', author: 'third author', coords: new NoteCoords(300, 300, 0)}
    ];

    let firstBoard = new Board(1, 'First board', 'First author');
    firstBoard.Notes = firstBoardNotes;

    this.boards.push(firstBoard);

    let secondBoardNotes = [
       {text: 'Batman', author: 'Batman', coords: new NoteCoords(100, 100, 0)},
       {text: 'is', author: 'Batman', coords: new NoteCoords(78, 129, 0)},
       {text: 'the', author: 'Batman', coords: new NoteCoords(250, 220, 0)},
       {text: 'king!', author: 'Batman', coords: new NoteCoords(431, 322, 0)}
    ];

    let secondBoard = new Board(2, 'Batman board ', 'Batman');
    secondBoard.Notes = secondBoardNotes;

    this.boards.push(secondBoard);

    let thirdBoardNotes = [
       {text: 'Chungas Revenge', author: 'Frank Zappa', coords: new NoteCoords(431, 200, 0)},
       {text: '200 Motels', author: 'Frank Zappa', coords: new NoteCoords(333, 248, 0)},
       {text: 'One Size Fits All', author: 'Frank Zappa', coords: new NoteCoords(123, 223, 0)},
       {text: 'Ship Arriving Too Late to Save a Drowning Witch ', author: 'Frank Zappa', coords: new NoteCoords(188, 345, 0)}
    ];

    let thirdBoard = new Board(3, 'Zappa board ', 'Frank');
    thirdBoard.Notes = thirdBoardNotes;

    this.boards.push(thirdBoard);
  }
}
