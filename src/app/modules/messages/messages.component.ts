import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { getMessages } from '../../reducers/messages/messages.selectors';
import { IState } from '../../reducers';

import { CreateMessageDialogComponent } from '../../shared/create-message-dialog/create-message-dialog.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  public displayedColumns: string[] = ['id', 'name', 'message', 'date']; //  (trimmed to 100 characters),  (formatted)
  public dataSource$ = this.store.select(getMessages);

  constructor(
    private store: Store<IState>,
    private matDialog: MatDialog,
  ) {
  }

  openAddMessageDialog(): void {
    this.matDialog.open(CreateMessageDialogComponent);
  }

  public trimMessage(msg:string): string{
    return msg.length > 100? msg.slice(0,100) + '...' : msg;
  }

}
