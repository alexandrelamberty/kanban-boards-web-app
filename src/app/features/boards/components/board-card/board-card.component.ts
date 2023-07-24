import { Component, Input, OnInit } from '@angular/core';
import { BoardFirestoreService } from '../../services/board-firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent implements OnInit {
  id: string | null = null;
  @Input() columnId: string | undefined;
  @Input() issue: Issue | undefined;

  constructor(
    private firestoreService: BoardFirestoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.issue);
  }

  taskDone() {
    console.log('TASK DONE');
    console.log('ADD TASK');
    if (this.id && this.columnId && this.issue?.id) {
      this.firestoreService.deleteIssue(this.id, this.columnId, this.issue?.id);
    }
  }
}
