import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { BoardProjectComponent } from './components/board-project/board-project.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';

@NgModule({
  imports: [CommonModule, BoardsRoutingModule],
  declarations: [
    BoardsComponent,
    BoardComponent,
    BoardProjectComponent,
    BoardColumnComponent,
    BoardCardComponent,
  ],
  exports: [BoardsComponent, BoardComponent],
})
export class BoardsModule {}
