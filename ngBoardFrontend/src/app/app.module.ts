import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { SideMenuModule } from './side-menu/side-menu.module';
import { BoardModule } from './board/board.module';

import { AppComponent } from './app.component';
import { CreateBoardComponent } from './create-board/create-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SideMenuModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
