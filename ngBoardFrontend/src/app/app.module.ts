import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SideMenuModule } from './side-menu/side-menu.module';
import { BoardModule } from './board/board.module';

import { AppComponent } from './app.component';
import { AddNoteModalComponent } from './board/add-note-modal/add-note-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SideMenuModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
