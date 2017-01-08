import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NoteComponent } from '../note/note.component';
import { DragNDropDirective } from '../note/dragNDrop/drag-n-drop.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoardComponent,
    NoteComponent,
    DragNDropDirective
  ],
  exports: [
    BoardComponent,
    NoteComponent
  ]
})
export class BoardModule { }
