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
  private dbPath = '/boards';

  boardsRef: AngularFirestoreCollection<Board>;
  boardRef: AngularFirestoreDocument<Board> | null = null;

  constructor(private db: AngularFirestore) {
    this.boardsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Board> {
    return this.boardsRef;
  }

  getOne(_id: string): Observable<Board> {
    let board: Board;
    const $board = this.boardsRef
      .doc<Board>(_id)
      .valueChanges()
      .pipe(
        map((changes: any) => {
          console.log(changes);
          /*
          board = {
            id: action.payload.id,
            ...(action.payload.data() as Board),
          };
          */
        })
      );
    return $board as Observable<Board>;
  }

  create(tutorial: Board): any {
    return this.boardsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.boardsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.boardsRef.doc(id).delete();
  }

  getBoardColumns(id: string): Observable<any> {
    const board = this.boardsRef.doc<Board>(id);
    const $columns = board
      .collection('columns')
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      );

    return $columns as Observable<any>;
    // .subscribe((data) => {
    //   console.log(data);
    // });

    /*
    const sfRef = this.tutorialsRef.doc(id);
    console.log(sfRef);
    const collections = await sfRef.collection;
    console.log(collections);
    */
    // collections.forEach((collection) => {
    //   console.log('Found subcollection with id:', collection.id);
    // });
  }

  getIssues(main: string, column: string) {
    console.log('getIssues(): ');
    const itemDoc = this.boardsRef.doc<Column>(main + '/columns/' + column);
    // Retrieve the issues collection from the document
    const subCollection = itemDoc
      .collection('issues')
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  /*
  getAllIssues(columnId: string): AngularFirestoreCollection<Issue> {
    return this.boardsRef;
  }
*/
}
