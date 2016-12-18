import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ng2-bootstrap';

import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    ButtonsModule
  ],
  exports: [
      SideMenuComponent
  ]
})
export class SideMenuModule { }
