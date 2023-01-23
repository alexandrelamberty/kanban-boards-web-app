import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../../models/issue.model';
import { Column } from '../../models/column.model';
import { __importDefault } from 'tslib';
import { BoardFirestoreService } from '../../services/board-firestore.service';
import { Observable } from 'rxjs';
import { Board } from '../../models/board.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss'],
})
export class BoardColumnComponent implements OnInit {
  id: string | null = null;
  @Input() board: Board | undefined;
  @Input() column: Column | undefined;
  issues: Issue[] | undefined;

  constructor(
    private firestoreService: BoardFirestoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('test');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID: ', this.id);
    console.log('BoardColumnComponentInit', this.board);
    if (this.id && this.column && this.column.id) {
      this.firestoreService
        .getIssues(this.id, this.column.id)
        .subscribe((data: any) => {
          console.log(data);
          this.issues = data;
        });
    }

    // --- Columns ---

    // Creata a board column
    let columnDto: Column = {
      name: 'Testsss',
    };

    if (this.id) {
      console.log('-------------- addd -------------------');
      //this.firestoreService.createColumn(this.id, columnDto);
    }
  }
}
