import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Board } from '../models/board.model';
import { map, catchError } from 'rxjs/operators';
import { Column } from '../models/column.model';
import { Issue } from '../models/issue.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardFirestoreService {
  boardsRef: AngularFirestoreCollection<Board>;
  private boardsCollection = this.afs.collection<Board>('boards');

  constructor(private afs: AngularFirestore) {
    this.boardsRef = this.afs.collection('boards');
  }

  getBoards(): Observable<Board[]> {
    return this.boardsCollection.valueChanges();
    // pipe
  }

  /*
  createBoard(board: Board): Promise<void> {
    return this.boardsCollection.add(board);
  }
  */

  getBoard(boardId: string): Observable<Board> {
    console.log(boardId);
    let itemDoc: AngularFirestoreDocument<Board>;
    let item: Observable<Board>;
    itemDoc = this.afs.doc('boards/' + boardId);
    item = itemDoc.valueChanges() as Observable<Board>;
    return item;
  }

  updateBoard(board: Board): Promise<void> {
    return this.boardsCollection.doc(board.id).update(board);
  }

  deleteBoard(boardId: string): Promise<void> {
    return this.boardsCollection.doc(boardId).delete();
  }

  getColumns(boardId: string): Observable<Column[]> {
    return this.boardsCollection
      .doc(boardId)
      .collection<Column>('columns')
      .valueChanges();
  }
  /*
  createColumn(boardId: string, column: Column): Promise<void> {
    return this.boardsCollection.doc(boardId).collection('columns').add(column);
  }
  */

  updateColumn(boardId: string, column: Column): Promise<void> {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(column.name)
      .update(column);
  }

  deleteColumn(boardId: string, columnId: string): Promise<void> {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(columnId)
      .delete();
  }

  getIssues(boardId: string, columnId: string): Observable<Issue[]> {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(columnId)
      .collection<Issue>('issues')
      .valueChanges();
  }

  /*
  createIssue(boardId: string, columnId: string, issue: Issue): Promise<void> {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(columnId)
      .collection('issues')
      .add(issue);
  }
  */
  updateIssue(boardId: string, columnId: string, issue: Issue): Promise<void> {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(columnId)
      .collection('issues')
      .doc(issue.text)
      .update(issue);
  }

  deleteIssue(
    boardId: string,
    columnId: string,
    issueId: string
  ): Promise<void> {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(columnId)
      .collection('issues')
      .doc(issueId)
      .delete();
  }
}
