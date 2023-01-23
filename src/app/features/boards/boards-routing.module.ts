import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'boards/:id',
    component: BoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule {}
