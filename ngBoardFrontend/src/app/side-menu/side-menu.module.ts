import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { CreateBoardComponent } from './create-board/create-board.component';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    CreateBoardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
