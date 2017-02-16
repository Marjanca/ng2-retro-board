import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
