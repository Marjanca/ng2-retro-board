import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

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
    this.close.emit(null);
    this.closeModal();
  }

  onSubmit() {
    this.submit.emit(null);
    this.closeModal();
  }

}
