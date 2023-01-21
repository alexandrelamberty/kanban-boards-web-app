import { Component } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  id: string | null = null;
  board: Board | undefined;
  constructor(
    private boardService: BoardsService,
    private route: ActivatedRoute
  ) {
    console.log('BoardComponent');
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) this.board = this.boardService.getBoardById(this.id);
  }
}
