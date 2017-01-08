import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() title: string;

  GetNoteTitle() {
    return `This note title is: ${this.title}`;
  }
}
