import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NoteComponent } from '../note/note.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoardComponent,
    NoteComponent
  ],
  exports: [
    BoardComponent,
    NoteComponent
  ]
})
export class BoardModule { }
