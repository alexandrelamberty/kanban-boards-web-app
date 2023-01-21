import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  projects: Board[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardService: BoardsService
  ) {
    this.projects = this.boardService.getAllBoards();
  }
  ngOnInit(): void {}

  onBoardSelected(board: Board) {
    console.log('onBoardSelected: ', board);
    // change route
    this.router.navigate(['/board/', board.id]);
  }
}
