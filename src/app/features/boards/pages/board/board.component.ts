import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';
import { BoardFirestoreService } from '../../services/board-firestore.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Output() board: Board | undefined;
  @Output() columns: Column[] | undefined;
  private id: string | null = null;

  constructor(
    private firestoreService: BoardFirestoreService,
    private route: ActivatedRoute
  ) {
    console.log('BoardComponent');
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id) {
      this.firestoreService.getBoard(this.id).subscribe((data: any) => {
        console.log('Board', data);
        this.board = data as Board;
      });

      this.firestoreService.getColumns(this.id).subscribe((data: any) => {
        console.log('Columns: ', data);
        this.columns = data as Column[];
        console.log(this.columns);
      });

      // TESTS ------
      /*
      let boardDto: Board = {
        name: 'Test',
        description: 'Description',
      };
      this.firestoreService.createBoard(boardDto);
      */

      // Update board

      // Delete a board
      //this.firestoreService.deleteBoard('n35HCMqxepscibk7r9Cp');

      // Creata a board column
      let columnDto: Column = {
        name: 'Testsss',
      };

      if (this.id) {
        console.log('-------------- addd -------------------');
        //this.firestoreService.createColumn(this.column?.id, columnDto);
      }
    }

    console.log('Board after: ', this.board);
    console.log('Columns after: ', this.columns);
  }
}
