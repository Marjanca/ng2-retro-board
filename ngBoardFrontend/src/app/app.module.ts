import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SideMenuModule } from './side-menu/side-menu.module';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
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
