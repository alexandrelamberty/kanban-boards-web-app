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
  closeResult = '';
  @Output() board: Board | undefined;
  @Output() columns: Column[] | undefined;
  id: string | null = null;

  constructor(
    private firestoreService: BoardFirestoreService,
    private route: ActivatedRoute,
    private modalService: NgbModal
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
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result: any) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
