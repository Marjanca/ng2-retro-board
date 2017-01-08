import { Note } from './../note/note';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  @Input()
  notes: Note[];

  @Input()
  title: string;

  constructor() { }
}
