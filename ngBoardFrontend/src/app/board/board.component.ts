import { Note } from '../note/models/note';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() title: string;
  @Input() notes: Note[];

  constructor() { }
}
