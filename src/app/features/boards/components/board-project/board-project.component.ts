import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-board-project',
  templateUrl: './board-project.component.html',
  styleUrls: ['./board-project.component.scss'],
})
export class BoardProjectComponent {
  @Input() board: Board | undefined;
  @Output() onBoardSelect: EventEmitter<Board> = new EventEmitter();

  selectBoard() {
    this.onBoardSelect.emit(this.board);
  }
}
