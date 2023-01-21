import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent {
  @Input() board: Board | undefined;
  @Output() onBoardSelect: EventEmitter<Board> = new EventEmitter();

  selectBoard() {
    this.onBoardSelect.emit(this.board);
  }
}
