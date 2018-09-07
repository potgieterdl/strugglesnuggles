import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Struggle } from './models/struggle';

@Injectable({
  providedIn: 'root'
})
export class StrugglesService {
  struggles: AngularFirestoreCollection<Struggle>;
  private taskDoc: AngularFirestoreDocument<Struggle>;

  constructor(private db: AngularFirestore) {
    this.struggles = db.collection<Struggle>('struggles');
    console.log(this.struggles);
 }
}
