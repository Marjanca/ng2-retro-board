/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteComponent } from './note.component';
import { Note } from './models/note';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;
  let note: Note;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    component.note = new Note(1, 0, 'text', 'author', 12, 17, 1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text of the note', async(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').innerText).toContain('text');
    expect(compiled.querySelector('div').innerText).toContain('author');
  }));

  it('should render note in a specific position', async(() => {
    let noteElement = fixture.debugElement.query(By.css('.data-test-note'));
    expect(noteElement.nativeElement.style.top).toBe(12 + 'px');
    expect(noteElement.nativeElement.style.left).toBe(17 + 'px');
    expect(noteElement.nativeElement.style.zIndex).toBe('1');
  }));
});
