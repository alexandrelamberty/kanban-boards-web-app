import { Component, Input } from '@angular/core';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss'],
})
export class BoardColumnComponent {
  @Input() columnName: string | undefined;
  @Input() issues: Issue[] | undefined;
}
