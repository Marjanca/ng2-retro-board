import { Directive, ElementRef, Input, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appDragNDrop]',
  host: {
    '(dragstart)': 'onDragStart($event)',
    '(dragover)': 'onDragOver($event)',
    '(drop)': 'onDrop($event)',
  }
})
export class DragNDropDirective {
  private static noteIdGen: number = 0;
  constructor(el: ElementRef, renderer: Renderer) {
    el.nativeElement.draggable = true;
    renderer.setElementAttribute(el.nativeElement, "note-id", (DragNDropDirective.noteIdGen++).toString());
  }
  onDragOver(ev) {
    console.log('allow drop');
    ev.preventDefault();
  };

  onDragStart(ev) {
    console.log('drag');

    ev.dataTransfer.setData("text/plain", ev.target.attributes["note-id"].nodeValue);
  };

  onDrop(ev) {
    console.log('drop');

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var elem = document.querySelector("[note-id='" + data + "']");

    var tabla = document.getElementById("tabla");

    var kockicaRect = elem.getBoundingClientRect();
    var tablaRect = tabla.getBoundingClientRect();

    elem.style.left = (ev.pageX - tablaRect.left).toString() + "px";
    elem.style.top = (ev.pageY - tablaRect.top).toString() + "px";
    elem.style.zIndex = '10000';
  };
}
