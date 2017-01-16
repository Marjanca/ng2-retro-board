import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  private modal: any;

  constructor(private element: ElementRef, private renderer: Renderer) {
    this.modal = element.nativeElement.querySelector('.modal');
  }

  ngOnInit() {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target === this.modal) {
        this.close();
      }
    });
  }

  private close() {
    this.modal.style.display = 'none';
  }

  onClose() {
    this.close();
  }

  onSubmit() {
    this.submit.emit(null);
  }

}
