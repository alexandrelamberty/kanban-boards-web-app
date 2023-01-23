import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board } from '../../models/board.model';
import { BoardFirestoreService } from '../../services/board-firestore.service';

@Component({
  selector: 'app-board-project',
  templateUrl: './board-project.component.html',
  styleUrls: ['./board-project.component.scss'],
})
export class BoardProjectComponent {
  @Input() board: Board | undefined;
  @Output() onBoardSelect: EventEmitter<Board> = new EventEmitter();

  constructor(private boardService: BoardFirestoreService) {}

  selectBoard() {
    this.onBoardSelect.emit(this.board);
  }

  deleteBoard() {
    console.log('delete board', this.board);
    if (this.board && this.board.id)
      this.boardService.deleteBoard(this.board.id);
  }
}
