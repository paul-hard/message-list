import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { IMessagesState, messagesFeatureKey, messagesReducer } from './messages/messages.reducer';
import { MessagesActions } from './messages/messages.actions';

export interface IState {
  [messagesFeatureKey]: IMessagesState
}

export const reducers: ActionReducerMap<IState, MessagesActions> = {
  [messagesFeatureKey]: messagesReducer
};

export const metaReducers: MetaReducer<IState, MessagesActions>[] = isDevMode() ? [] : [];
