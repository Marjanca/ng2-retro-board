import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';
import { Board } from './models/board';
import { BoardService } from './services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  @ViewChild('addNoteModal') addNoteModal: AddNoteModalComponent;

  private routeParamsSub: any;
  board: Board;

  constructor(private boardService: BoardService, private route: ActivatedRoute) { }

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

  getBoard = () => this.board;

  setBoard(board: Board) {
    this.board = board;
  }

  openAddNoteModal() {
    this.addNoteModal.openModal();
  }

  onNoteCreated(note) {
    this.board.getNotes().push(note);
  }
}
