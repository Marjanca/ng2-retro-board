import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';
import { Board } from './models/board';
import { BoardService } from './services/board.service';
import { NoteService } from '../note/services/note.service';
import { Note } from '../note/models/note';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  @ViewChild('addNoteModal') addNoteModal: AddNoteModalComponent;

  private routeParamsSub: any;
  private board: Board;

  constructor(
    private boardService: BoardService,
    private noteService: NoteService,
    private route: ActivatedRoute) { }

  get Board(): Board {
    return this.board;
  }

  set Board(board: Board) {
      this.board = board;
  }

  ngOnInit() {
    // The reason that the params property on ActivatedRoute is an Observable 
    // is that the router may not recreate the component when navigating to the same component. 
    // In this case the parameter may change without the component being recreated.
    this.routeParamsSub = this.route.params.subscribe((params) => {
      this.board = this.boardService.getBoard(Number(params['id']));
    });
  }

  ngOnDestroy() {
    // We need to explicitly unsubscribe in this case to avoid memory leaks 
    // once the component is destroyed
    this.routeParamsSub.unsubscribe();
  }

  openAddNoteModal() {
    this.addNoteModal.openModal(this.board.Id);
  }

  onNoteCreated(note: Note) {
    this.noteService.saveNote(note);
    // TODO: Add note to board only after succefull resolution of 
    // the async call to saveNote, otherwise show error
    this.board.Notes.push(note);
  }
}
