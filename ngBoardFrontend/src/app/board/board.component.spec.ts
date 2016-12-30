import { NoteCoords } from './../note/note-coords';
import { Note } from './../note/note';

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let mockNotes = [
    new Note('Everything is fine', 'John', new NoteCoords(20, 50, 1)),
    new Note('Focus groups are great', 'Sue', new NoteCoords(120, 200, 2)),
    new Note('Food can be better', 'Mike', new NoteCoords(300, 100, 3))
  ];

  it('should display notes in divs', () => {

    component.notes = mockNotes;
    fixture.detectChanges();

    let noteDivs = fixture.debugElement.queryAll(By.css('.data-test-note'));

    noteDivs.forEach((de, index) => {
      let divContent = de.nativeElement.textContent;
      let expectedContent = mockNotes[index].text;

      expect(divContent).toContain(expectedContent);
    });
  });

  it('should display a title in h1', () => {
    component.title = 'Some Board Title';
    fixture.detectChanges();

    let titleDebugElement = fixture.debugElement.query(By.css('.data-test-board-title'));

    expect(titleDebugElement.nativeElement.textContent).toContain('Some Board Title');
  });

  it('should display each note in its position', () => {

    component.notes = mockNotes;
    fixture.detectChanges();

    let noteDivs = fixture.debugElement.queryAll(By.css('.data-test-note'));

    noteDivs.forEach((de, index) => {
      let note = mockNotes[index];

      expect(de.nativeElement.style.top).toBe(note.coords.top);
      expect(de.nativeElement.style.left).toBe(note.coords.left);
      expect(de.nativeElement.style.zIndex).toBe(note.coords.zIndex.toString());
    });
  });

});
