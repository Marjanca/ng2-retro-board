import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable()
export class NoteService {

  private notes: Note[] = [
    new Note(1, 1, 'There is no spoon', 'Neo', 100, 300, 1),
    new Note(2, 1, 'I\'m going to make him an offer he can\'t refuse.', 'Corleone', 200, 500, 1),
    new Note(3, 2, 'Do. Or do not. There is no try', 'Yoda', 100, 1000, 1),
    new Note(4, 2, 'Impressive. Most impressive. Obi-Wan has taught you well. You have controlled your fear. ' +
        'Now, release your anger. Only your hatred can destroy me.', 'Vader', 200, 500, 1)
  ];

  constructor() { }

  getNote(noteId: number): Note {
    return this.notes.find((note) => note.Id === noteId );
  }

  getNotes(boardId: number): Note[] {
    return this.notes.filter((note) => note.BoardId === boardId);
  }

  saveNote(note: Note) {
      this.notes.push(note);
  }
}
