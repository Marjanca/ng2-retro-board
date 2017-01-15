import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';

export const appRoutes: Routes = [
  { path: 'board/:id', component: BoardComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);