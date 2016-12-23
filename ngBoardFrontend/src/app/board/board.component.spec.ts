import { Note } from './../note';
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
    new Note('Everything is fine'),
    new Note('Focus groups are great'),
    new Note('Food can be better')
  ];

  it('should display notes in divs', () => {
    component.notes = mockNotes;
    fixture.detectChanges();

    let noteDivs = fixture.debugElement.queryAll(By.css('div'));

    noteDivs.forEach((de, index) => {
      let divContent = de.nativeElement.textContent;
      let expectedContent = mockNotes[index].text;

      expect(divContent).toContain(expectedContent);
    });
  });

  it('should display a title in h1', () => {
    component.title = 'Some Board Title';
    fixture.detectChanges();

    let titleDebugElement = fixture.debugElement.query(By.css('h1'));

    expect(titleDebugElement.nativeElement.textContent).toContain('Some Board Title');
  });
});
