import { createSelector } from '@ngrx/store';

import { IState } from '../index';
import { IMessagesState, messagesFeatureKey } from './messages.reducer';
import { IMessage } from '../../interfaces/global.interfaces';

// Selector State
export const getMessagesState = (state: IState): IMessagesState => state[messagesFeatureKey];

// Callbacks selectors
export const selectMessagesList = (state: IMessagesState): IMessage[] => state.messages;
export const selectLoaderState = (state: IMessagesState): boolean => state.isLoading;

// Selector Data
export const getMessages = createSelector(getMessagesState, selectMessagesList);
export const getLoaderState = createSelector(getMessagesState, selectLoaderState);
