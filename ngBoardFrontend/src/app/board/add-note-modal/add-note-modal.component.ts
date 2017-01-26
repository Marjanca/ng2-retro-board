import { NoteCoords } from './../../note/models/note-coords';
import { Note } from './../../note/models/note';
import { ModalComponent } from './../../shared/modal/modal.component';
import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.scss']
})
export class AddNoteModalComponent {

  @ViewChild('modal') modal: ModalComponent;
  @ViewChild('textarea') textArea: ElementRef;

  @Output() noteCreated: EventEmitter<Note> = new EventEmitter();

  public openModal() {
    this.modal.openModal();
  }

  private onClose() {
    console.log('Add note modal closed.');
    this.textArea.nativeElement.value = '';
  }

  private onSubmit() {
    console.log('Add note modal submited.');
    this.noteCreated.emit(new Note(this.textArea.nativeElement.value, '<anonymous>', new NoteCoords(250, 200, 10000)));
  }
}
