
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBoardComponent } from './create-board/create-board.component';
import { SharedModule } from './../shared/shared.module';
import { BoardService } from './services/board.service';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteService } from '../note/services/note.service';
import { BoardComponent } from './board.component';
import { NoteComponent } from '../note/note.component';
import { DragNDropDirective } from '../note/dragNDrop/drag-n-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BoardComponent,
    NoteComponent,
    DragNDropDirective,
    CreateNoteComponent,
    CreateBoardComponent
  ],
  exports: [
    CreateBoardComponent,
    BoardComponent,
    NoteComponent
  ],
  providers: [
    BoardService,
    NoteService
  ]
})
export class BoardModule { }
