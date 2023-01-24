import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { AuthGuard } from '../authentication/guards/auth.guard';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'boards/:id',
    component: BoardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule {}
