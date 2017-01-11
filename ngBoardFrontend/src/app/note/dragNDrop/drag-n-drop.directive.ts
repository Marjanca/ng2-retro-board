import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appDragNDrop]'
})
export class DragNDropDirective {
  private static noteIdGen: number = 0;
  constructor(el: ElementRef, renderer: Renderer) {
    el.nativeElement.draggable = true;
    renderer.setElementAttribute(el.nativeElement, 'note-id', (DragNDropDirective.noteIdGen++).toString());
  }
  @HostListener('dragover', ['$event']) onDragOver(ev) {
    ev.preventDefault();
  };

  @HostListener('dragstart', ['$event']) onDragStart(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.attributes['note-id'].nodeValue);
  };

  @HostListener('drop', ['$event']) onDrop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    let elem = <HTMLElement>document.querySelector('[note-id="' + data + '"]');

    let table = document.getElementById('table');

    // var kockicaRect = elem.getBoundingClientRect();
    let tableRect = table.getBoundingClientRect();

    elem.style.left = (ev.pageX - tableRect.left).toString() + 'px';
    elem.style.top = (ev.pageY - tableRect.top).toString() + 'px';
    elem.style.zIndex = '10000';
  };
}
