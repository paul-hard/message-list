import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, } from 'rxjs/operators';
import { of, delay } from 'rxjs';

// Store
import {
  CreateMessageActionError,
  CreateMessageActionSuccess, GetMessagesActionError,
  GetMessagesActionSuccess,
  messagesActionsType
} from './messages.actions';
import { FirebaseService } from '../../services/firebase.service';
import { Action } from '@ngrx/store';
import {SnackbarService} from "../../services/snackbar.service";
import {MatDialog} from "@angular/material/dialog";

@Injectable()
export class MessagesEffects {

  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService,
    private snackbarService: SnackbarService,
    private matDialog: MatDialog
  ) {
  }

  createMessage$ = createEffect(() => this.actions$.pipe(
    ofType(messagesActionsType.createMessage),
    switchMap(({ data }: Action & { data: { name: string, message: string } }) => {
      const date = new Date().getTime();
      return this.firebaseService.createNewMessage({ ...data, date })
        .pipe(
          map(() => {
            this.matDialog.closeAll();
            this.snackbarService.openSuccessSnackBar('Message successfully added');
            return new CreateMessageActionSuccess();
          }),
          catchError((error) => {
            this.snackbarService.openErrorSnackBar('Message does not added');
            return of(new CreateMessageActionError(error.error));
          })
        );
    })
  ));

  getMessagesList$ = createEffect(() => this.actions$.pipe(
    ofType(messagesActionsType.getMessages),
    switchMap(() => {
      return this.firebaseService.getMessagesList()
        .pipe(
          delay(2000),
          map((messagesList) => {
            return new GetMessagesActionSuccess(messagesList);
          }),
          catchError((error) => {
            return of(new GetMessagesActionError(error.error));
          })
        );
    })
  ));
}
