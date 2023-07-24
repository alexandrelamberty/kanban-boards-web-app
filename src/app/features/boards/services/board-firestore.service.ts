import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { Issue } from '../models/issue.model';

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
    const boards = this.afs.collection('boards');
    const test = boards.snapshotChanges().pipe(
      map((changes: any) =>
        changes.map((c: any) => ({
          id: c.payload.doc.id,
          ...c.payload.doc.data(),
        }))
      )
    );

    return test as Observable<any>;
  }

  createBoard(board: Board): Promise<void> {
    const id = this.afs.createId();
    return this.boardsCollection.doc(id).set(board);
  }

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
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      );
  }

  createColumn(boardId: string, column: Column) {
    return this.boardsCollection.doc(boardId).collection('columns').add(column);
  }

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

  // TODO: Query for issues not done and done
  getIssues(boardId: string, columnId: string): Observable<Issue[]> {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(columnId)
      .collection<Issue>('issues')
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      );
  }

  createIssue(boardId: string, columnId: string, issue: Issue) {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(columnId)
      .collection('issues')
      .add(issue);
  }

  updateIssue(boardId: string, columnId: string, issue: Issue): Promise<void> {
    return this.boardsCollection
      .doc(boardId)
      .collection('columns')
      .doc(columnId)
      .collection('issues')
      .doc(issue.text)
      .update(issue);
  }

  moveIssue() {
    // to be implemented
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
