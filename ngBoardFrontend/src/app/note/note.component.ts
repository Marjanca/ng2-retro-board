import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  private title: string = 'Frank Zappa';

  GetNoteTitle() {
    return `This note title is: ${this.title}`;
  }
}
