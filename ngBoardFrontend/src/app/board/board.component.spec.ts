import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';
import { BoardComponent } from './board.component';
import { NoteComponent } from '../note/note.component';
import { BoardService } from './services/board.service';

import { Note } from '../note/models/note';
import { Board } from './models/board';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  let mockBoard: Board;
  let mockNotes: Note[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AddNoteModalComponent,
        BoardComponent,
        NoteComponent
      ],
      providers: [
        BoardService,
        { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'id': 1 }]) } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;

    mockNotes = [
      new Note(1, 1, 'There is no spoon', 'Neo', 100, 300, 1),
      new Note(2, 1, 'I\'m going to make him an offer he can\'t refuse.', 'Corleone', 200, 500, 1)
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display notes in divs', () => {
    fixture.detectChanges();

    let noteDivs = fixture.debugElement.queryAll(By.css('.data-test-note'));

    noteDivs.forEach((de, index) => {
      let divContent = de.nativeElement.textContent;
      let expectedContent = mockNotes[index].text;

      expect(divContent).toContain(expectedContent);
    });
  });

  it('should display a title in h1', () => {
    fixture.detectChanges();

    let titleDebugElement = fixture.debugElement.query(By.css('.data-test-board-title'));

    expect(titleDebugElement.nativeElement.innerText).toContain('January 2017');
  });

  it('should display each note in its position', () => {
    fixture.detectChanges();

    let noteDivs = fixture.debugElement.queryAll(By.css('.data-test-note'));

    noteDivs.forEach((de, index) => {
      let note = mockNotes[index];

      expect(de.nativeElement.style.top).toBe(note.top + 'px');
      expect(de.nativeElement.style.left).toBe(note.left + 'px');
      expect(de.nativeElement.style.zIndex).toBe(note.zIndex.toString());
    });
  });

  it('should show add note modal when Add note button is clicked', () => {
    // Make sure modal is hidden
    component.addNoteModal.modal.nativeElement.style.display = 'none';

    let addNoteButton = fixture.debugElement.query(By.css('.data-test-add-note-button'));
    addNoteButton.triggerEventHandler('click', null);

    expect(component.addNoteModal.modal.nativeElement.style.display).toContain('block');
  });
});
