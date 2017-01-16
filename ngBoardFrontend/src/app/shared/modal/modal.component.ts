import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Output('submit') submitEvent: EventEmitter<any> = new EventEmitter();
  @Output('close') closeEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild('modal') modal: ElementRef;

  constructor(private renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.listen(this.modal.nativeElement, 'click', (event) => {
      if (event.target === this.modal.nativeElement) {
        this.closeModal();
      }
    });
  }

  private closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }

  public openModal() {
    this.modal.nativeElement.style.display = 'block';
  }

  onClose() {
    this.closeEvent.emit(null);
    this.closeModal();
  }

  onSubmit() {
    this.submitEvent.emit(null);
    this.closeModal();
  }

}
