
import { TestBed, inject } from '@angular/core/testing';

import { NoteService } from './note.service';
import { Note } from '../models/note';

describe('BoardService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteService
      ]
    });
  });

  it('should ...', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));

  it('should get note when GetNote', inject([NoteService], (service: NoteService) => {
    let note = service.getNote(1);
    expect(note.text).toBe('There is no spoon');
  }));

  it('should get all notes for board when GetNotes called', inject([NoteService], (service: NoteService) => {
    let notes = service.getNotes(2);
    expect(notes.length).toBe(2);
    expect(notes[0].text).toBe('Do. Or do not. There is no try');
    expect(notes[1].text).toBe('Impressive. Most impressive. Obi-Wan has taught you well. You have controlled your fear. ' +
        'Now, release your anger. Only your hatred can destroy me.');
  }));

  it('should save note when SaveNote called', inject([NoteService], (service: NoteService) => {
    let note = new Note(5, 3, 'test', 'auth', 0, 0, 0);
    service.saveNote(note);

    let notes = service.getNotes(3);
    expect(notes.length).toBe(1);
    expect(notes[0].text).toBe('test');
  }));
});
