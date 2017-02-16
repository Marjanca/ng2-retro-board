import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent],
  exports: [ModalComponent],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
