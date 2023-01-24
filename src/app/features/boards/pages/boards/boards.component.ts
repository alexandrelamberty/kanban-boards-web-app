import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Board } from '../../models/board.model';
import { BoardFirestoreService } from '../../services/board-firestore.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  projects: Board[];
  closeResult = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestoreService: BoardFirestoreService,
    private modalService: NgbModal
  ) {
    this.projects = [];
    //this.projects = this.boardService.getAllBoards();
  }
  ngOnInit(): void {
    this.firestoreService.getBoards().subscribe((data) => {
      console.log(data);
      this.projects = data as Board[];
    });

    this.firestoreService.getColumns('0hmGWduZElEucLjSuBtv');

    this.firestoreService.getIssues(
      '0hmGWduZElEucLjSuBtv',
      'lNbepgfgX6XFVf5jrScu'
    );

    //console.log('Subcollection: ', data);

    //this.firestoreService.getIssues();
  }

  onBoardSelected(board: Board) {
    console.log('onBoardSelected: ', board);
    // change route
    this.router.navigate(['/boards/', board.id]);
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
