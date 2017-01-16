import { BoardService } from './services/board.service';
import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NoteComponent } from '../note/note.component';
import { DragNDropDirective } from '../note/dragNDrop/drag-n-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BoardComponent,
    NoteComponent,
    DragNDropDirective,
    AddNoteModalComponent
  ],
  exports: [
    BoardComponent,
    NoteComponent
  ],
  providers: [BoardService]
})
export class BoardModule { }
