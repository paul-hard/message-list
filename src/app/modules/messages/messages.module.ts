import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";


import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { CreateMessageDialogComponent } from '../../shared/create-message-dialog/create-message-dialog.component';

@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    CreateMessageDialogComponent,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MessagesModule {
}
