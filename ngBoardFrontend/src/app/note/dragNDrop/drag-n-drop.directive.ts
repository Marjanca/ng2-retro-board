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
    console.log('allow drop');
    ev.preventDefault();
  };

  @HostListener('dragstart', ['$event']) onDragStart(ev) {
    console.log('drag');

    ev.dataTransfer.setData('text/plain', ev.target.attributes['note-id'].nodeValue);
  };

  @HostListener('drop', ['$event']) onDrop(ev) {
    console.log('drop');

    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    let elem = <HTMLElement>document.querySelector('[note-id="' + data + '"]');

    let tabla = document.getElementById('tabla');

    // var kockicaRect = elem.getBoundingClientRect();
    let tablaRect = tabla.getBoundingClientRect();

    elem.style.left = (ev.pageX - tablaRect.left).toString() + 'px';
    elem.style.top = (ev.pageY - tablaRect.top).toString() + 'px';
    elem.style.zIndex = '10000';
  };
}
