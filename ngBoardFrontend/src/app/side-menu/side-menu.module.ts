import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ng2-bootstrap';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    ButtonsModule,
    CommonModule
  ],
  exports: [
      SideMenuComponent
  ]
})
export class SideMenuModule { }
