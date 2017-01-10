import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
