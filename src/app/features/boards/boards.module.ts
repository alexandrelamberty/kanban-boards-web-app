import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { IssueItemComponent } from './components/issue-item/issue-item.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardsRoutingModule } from './boards-routing.module';

@NgModule({
  imports: [CommonModule, BoardsRoutingModule],
  declarations: [
    BoardsComponent,
    BoardCardComponent,
    BoardColumnComponent,
    IssueItemComponent,
    BoardComponent,
  ],
  exports: [BoardsComponent],
})
export class BoardsModule {}
