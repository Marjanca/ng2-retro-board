import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Board } from './models/board';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() board: Board;

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('textarea') textArea: ElementRef;

  private clearTextArea() {
    this.textArea.nativeElement.value = '';
  }

  openDialog() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeDialog() {
    this.clearTextArea();
    this.modal.nativeElement.style.display = 'none';
  }

  checkForClosing(targetElement) {
    if(targetElement === this.modal.nativeElement) {
      this.closeDialog();
    }
  }

}
