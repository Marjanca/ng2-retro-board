import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Board } from './../../board/models/board';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CreateBoardComponent } from './create-board.component';

describe('CreateBoardComponent', () => {
  let component: CreateBoardComponent;
  let fixture: ComponentFixture<CreateBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CreateBoardComponent, ModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a board when onSubmit is called', () => {
    component.boardTitle = 'Board Title';
    component.onSubmit();

    let expectedBoard = new Board(0, 'Board Title', '');
    component.boardCreated.subscribe(board => {
      expect(board).toEqual(expectedBoard);
    });
  });
});
