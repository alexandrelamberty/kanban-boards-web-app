import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';

const BOARDS: Board[] = [
  {
    id: '1',
    name: 'Nidus',
    description: 'Home Automation and Monitoring',
    issues: 20,
  },
  {
    id: '2',
    name: 'Hortus',
    description: 'Gardenning planner',
    issues: 15,
  },
  {
    id: '3',
    name: 'FSWD',
    description: 'Full Stack Web Development Sharing Resources',
    issues: 12,
  },
  {
    id: '4',
    name: 'FSWD',
    description: 'Full Stack Web Development Sharing Resources',
    issues: 12,
  },
  {
    id: '5',
    name: 'FSWD',
    description: 'Full Stack Web Development Sharing Resources',
    issues: 12,
  },
  {
    id: '6',
    name: 'FSWD',
    description: 'Full Stack Web Development Sharing Resources',
    issues: 12,
  },
];

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor() {}

  getAllBoards(): Board[] {
    return BOARDS;
  }

  getBoardById(_id: string): Board {
    const board = BOARDS.find(({ id }) => id === _id);
    return board as Board;
  }

  createBoard() {}

  updateBoard() {}

  removeBoard() {}
}
