import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';
import { Issue } from '../../models/issue.model';
import { BoardFirestoreService } from '../../services/board-firestore.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
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
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.column && this.column.id) {
      this.firestoreService
        .getIssues(this.id, this.column.id)
        .subscribe((data: any) => {
          this.issues = data;
        });
    }
  }

  deleteColumn() {
    if (this.id && this.column?.id)
      this.firestoreService.deleteColumn(this.id, this.column?.id);
  }

  addTask() {
    console.log('ADD TASK');
    const issue: Issue = {
      text: 'Hello',
    };
    if (this.id && this.column?.id)
      this.firestoreService.createIssue(this.id, this.column?.id, issue);
  }

  drop(event: CdkDragDrop<Issue[] | undefined>) {
    console.log('------- DROP ISSUE -----');
    console.log('EVENT: ', event);
    console.log(event.item.data);

    if (event.previousContainer === event.container) {
      console.log('SAME CONTAINER');
      if (event.container.data)
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
    } else {
      console.log('DIFFERENT CONTAINER');
      console.log('PREV CONT DATA: ', event.previousContainer.data);
      console.log('CONT DATA: ', event.container.data);
      console.log('PREV INDEX: ', event.previousIndex);
      if (event.container.data && event.previousContainer.data)
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
    }
  }
}
