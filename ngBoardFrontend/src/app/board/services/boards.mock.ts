import { Note } from '../../note/models/note';
import { Board } from '../models/board';

const notes1 = [
    new Note(1, 'There is no spoon', 'Neo', 100, 300, 1),
    new Note(2, 'I\'m going to make him an offer he can\'t refuse.', 'Corleone', 200, 500, 1)
];

const notes2 = [
    new Note(3, 'Do. Or do not. There is no try', 'Yoda', 100, 1000, 1),
    new Note(4, 'Impressive. Most impressive. Obi-Wan has taught you well. You have controlled your fear. ' +
        'Now, release your anger. Only your hatred can destroy me.', 'Vader', 200, 500, 1)
];

const board1 = new Board(1, 'January 2017', 'Sale');
board1.setNotes(notes1);

const board2 = new Board(2, 'March 2017', 'Masi');
board2.setNotes(notes2);

export const MOCK_BOARDS = [board1, board2];
