import { Note } from './../note';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input()
  notes: Note[];

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
