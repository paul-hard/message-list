import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

import { IMessage } from '../interfaces/global.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private angularFire: AngularFirestore) {
  }

  createNewMessage(messageData: IMessage): Observable<any> {
    return from(this.angularFire.collection('messages-collection').add(messageData));
  }

  getMessagesList(): Observable<any> {
    return this.angularFire.collection('messages-collection')
      .valueChanges({
        idField: 'id'
      });
  }
}
