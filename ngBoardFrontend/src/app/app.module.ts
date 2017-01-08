import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SideMenuModule } from './side-menu/side-menu.module';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';

import { DragNDropDirective } from './note/dragNDrop/drag-n-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    DragNDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SideMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
