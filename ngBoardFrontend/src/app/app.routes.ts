import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';

export const routes: Routes = [
  { path: 'board/:id', component: BoardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
