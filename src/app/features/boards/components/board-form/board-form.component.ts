import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BoardFirestoreService } from '../../services/board-firestore.service';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss'],
})
export class BoardFormComponent {
  @Input('modal') modal: any;

  boardForm = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(255),
    ]),
  });

  constructor(
    private boardService: BoardFirestoreService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    console.log('onSubmit ', this.boardForm.value);
    if (this.boardForm.valid) {
      const board: Board = {
        name: this.boardForm.value.name as string,
        description: this.boardForm.value.description as string,
      };
      if (board)
        this.boardService.createBoard(board).then((value: void) => {
          this.modal.close('save');
          this.boardForm.reset();
        });
    }
  }

  close() {
    this.modal.close('close');
  }
}
