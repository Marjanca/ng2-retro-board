import { Component, OnInit } from '@angular/core';
import { BoardMenuItem } from './side-menu/models/boardMenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private boards: BoardMenuItem[];

  ngOnInit() {
    this.boards = [
      {id: 1, name: 'First'},
      {id: 2, name: 'Second'},
      {id: 3, name: 'Third'}
    ];
  }

  menuItemClicked(item: BoardMenuItem) {
    console.log(item);
  }
}
