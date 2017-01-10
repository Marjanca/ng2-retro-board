import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.scss']
})
export class AddNoteModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('textarea') textArea: ElementRef;

  private clearTextArea() {
    this.textArea.nativeElement.value = '';
  }

  openModal() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.clearTextArea();
    this.modal.nativeElement.style.display = 'none';
  }

  checkForClosing(targetElement) {
    if (targetElement === this.modal.nativeElement) {
      this.closeModal();
    }
  }

}
