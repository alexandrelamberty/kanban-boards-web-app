import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Column } from '../../models/column.model';
import { BoardFirestoreService } from '../../services/board-firestore.service';

@Component({
  selector: 'app-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss'],
})
export class ColumnFormComponent {
  @Input('modal') modal: any;
  @Input('boardId') boardId: string | null = null;

  columnForm = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40),
    ]),
  });

  constructor(
    private boardService: BoardFirestoreService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    console.log('onSubmit ', this.columnForm.value);
    if (this.columnForm.valid) {
      const column: Column = {
        name: this.columnForm.value.name as string,
      };
      if (column) {
        console.log('submited', column, this.boardId);

        this.boardService
          .createColumn(this.boardId as string, column)
          .then((value: any) => {
            this.modal.close('save');
            this.columnForm.reset();
          });
      }
    }
  }

  close() {
    this.modal.close('close');
  }
}
