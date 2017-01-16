/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoardService } from './board.service';
import { Board } from '../models/board';
import { Note } from '../../note/models/note';
import { NoteCoords } from '../../note/models/note-coords';

describe('BoardService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardService]
    });
  });

  it('should ...', inject([BoardService], (service: BoardService) => {
    expect(service).toBeTruthy();
  }));

  it('should set all boards correctly', inject([BoardService], (service: BoardService) => {
    const boards = createDummyBoards();
    service.setBoards(boards);
    service.selectBoard(boards[0].getId());
     expect(service.getSelectedBoard()).toEqual(boards[0]);
  }));

  function createDummyBoards(): Board[] {
    const notes1 = [
      new Note('There is no spoon', 'Neo', new NoteCoords(100, 300, 1)),
      new Note('I\'m going to make him an offer he can\'t refuse.', 'Corleone', new NoteCoords(200, 500, 1))
    ];

    const notes2 = [
      new Note('Do. Or do not. There is no try', 'Yoda', new NoteCoords(100, 1000, 1)),
      new Note('Impressive. Most impressive. Obi-Wan has taught you well. You have controlled your fear. ' +
        'Now, release your anger. Only your hatred can destroy me.', 'Vader', new NoteCoords(200, 500, 1))
    ];

    const board1 = new Board(1, 'January 2017', 'Sale');
    board1.setNotes(notes1);

    const board2 = new Board(2, 'March 2017', 'Masi');
    board2.setNotes(notes2);

    return [board1, board2];
  }
});
