import { Component, OnInit } from '@angular/core';
import { BoardMenuItem } from './side-menu/models/boardMenuItem';
import { Note } from './note/models/note';
import { NoteCoords } from './note/models/note-coords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private boards: BoardMenuItem[];
  private activeBoardNotes: Note[];

  ngOnInit() {
    this.boards = [
      {id: 1, name: 'First'},
      {id: 2, name: 'Second'},
      {id: 3, name: 'Third'}
    ];

    this.activeBoardNotes = [
      {text: 'first note', author: 'first author', coords: new NoteCoords(100, 100, 0)},
      {text: 'second note', author: 'second author', coords: new NoteCoords(200, 200, 0)},
      {text: 'third note', author: 'third author', coords: new NoteCoords(300, 300, 0)}
    ];
  }

  menuItemClicked(item: BoardMenuItem) {
    console.log(item);
  }
}
