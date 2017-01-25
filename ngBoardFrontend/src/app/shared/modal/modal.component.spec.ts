/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submit event when Submit button is clicked', () => {
    spyOn(component.submit, 'emit');

    let submitButton = fixture.debugElement.query(By.css('.data-test-submit-button'));
    submitButton.triggerEventHandler('click', null);

    expect(component.submit.emit).toHaveBeenCalledWith(null);
  });

  it('should emit close event when Close button is clicked', () => {
    spyOn(component.close, 'emit');

    let closeButton = fixture.debugElement.query(By.css('.data-test-close-button'));
    closeButton.triggerEventHandler('click', null);

    expect(component.close.emit).toHaveBeenCalledWith(null);
  });

  it('should close modal when Close button is clicked', () => {
    component.openModal();

    let closeButton = fixture.debugElement.query(By.css('.data-test-close-button'));
    closeButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.modal.nativeElement.style.display).toBe('none');
  });

  it('should close modal when Submit button is clicked', () => {
    component.openModal();

    let submitButton = fixture.debugElement.query(By.css('.data-test-submit-button'));
    submitButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.modal.nativeElement.style.display).toBe('none');
  });

  it('should close modal when is clicked outside of modal content', () => {
    let modalDiv = fixture.debugElement.query(By.css('.data-test-modal-div'));
    modalDiv.nativeElement.style.display = 'block';

    let mouseClickEvent = {
      target: modalDiv.nativeElement
    };
    modalDiv.triggerEventHandler('click', mouseClickEvent);

    fixture.detectChanges();

    expect(modalDiv.nativeElement.style.display).toBe('none');
  });

});
