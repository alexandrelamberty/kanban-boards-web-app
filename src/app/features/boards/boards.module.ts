import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { BoardProjectComponent } from './components/board-project/board-project.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardFormComponent } from './components/board-form/board-form.component';
import { ColumnFormComponent } from './components/column-form/column-form.component';
import { IssueFormComponent } from './components/issue-form/issue-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BoardsRoutingModule],
  declarations: [
    BoardsComponent,
    BoardComponent,
    BoardProjectComponent,
    BoardColumnComponent,
    BoardCardComponent,
    BoardFormComponent,
    ColumnFormComponent,
    IssueFormComponent,
  ],
  exports: [BoardsComponent, BoardComponent],
})
export class BoardsModule {}
