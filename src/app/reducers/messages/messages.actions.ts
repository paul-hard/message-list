import { Action } from '@ngrx/store';
import { IMessage } from '../../interfaces/global.interfaces';

export enum messagesActionsType {
  createMessage = '[Messages] Create message',
  createMessageSuccess = '[Messages] Create message success',
  createMessageError = '[Messages] Create message error',
  getMessages = '[Messages] Get messages',
  getMessagesSuccess = '[Messages] Get messages success',
  getMessagesError = '[Messages] Get messages error',
}

export class CreateMessageAction implements Action {
  readonly type = messagesActionsType.createMessage;

  constructor(public data: { name: string, message: string }) {
  }
}

export class CreateMessageActionSuccess implements Action {
  readonly type = messagesActionsType.createMessageSuccess;
}

export class CreateMessageActionError implements Action {
  readonly type = messagesActionsType.createMessageError;

  constructor(public error: string) {
  }
}

export class GetMessagesAction implements Action {
  readonly type = messagesActionsType.getMessages;
}

export class GetMessagesActionSuccess implements Action {
  readonly type = messagesActionsType.getMessagesSuccess;

  constructor(public messagesList: IMessage[]) {
  }
}

export class GetMessagesActionError implements Action {
  readonly type = messagesActionsType.getMessagesError;

  constructor(public error: string) {
  }
}

export type MessagesActions = CreateMessageAction |
  CreateMessageActionSuccess |
  CreateMessageActionError |
  GetMessagesAction |
  GetMessagesActionSuccess |
  GetMessagesActionError;
