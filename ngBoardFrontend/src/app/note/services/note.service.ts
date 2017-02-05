import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable()
export class NoteService {

  private notes: Note[];

  constructor() {
    // this.notes = MOCK_BOARDS;
  }

  getNote(noteId: number): Note {
    return this.notes.find((note) => note.getId() === noteId );
  }

  saveNote(note: Note) {
      this.notes.push(note);
  }
}
