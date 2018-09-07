import { Component } from '@angular/core';
import { Struggle } from '../models/struggle';
import { AngularFireDatabase } from '@angular/fire/database';
import { StrugglesService } from '../struggles.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private strugglesCollection: AngularFirestoreCollection<Struggle>;
  struggles: Observable<Struggle[]>;

  constructor(private afs: AngularFirestore, private struggleService: StrugglesService) {
    console.log("----------------");
    this.strugglesCollection = afs.collection<Struggle>('struggles');
    this.struggles = this.strugglesCollection.valueChanges();
  }

  addItem(type: string) {
    const id = this.afs.createId();
    const struggle: Struggle = { id, type };
    this.itemsCollection.doc(id).set(struggle);
  }
}
