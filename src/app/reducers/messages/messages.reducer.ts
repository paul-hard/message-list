import { MessagesActions, messagesActionsType } from './messages.actions';
import { IMessage } from '../../interfaces/global.interfaces';

export const messagesFeatureKey = 'messages';

export interface IMessagesState {
  messages: IMessage[],
  isLoading: boolean,
  error: string | null
}

export const initialState: IMessagesState = {
  messages: [],
  isLoading: false,
  error: null
};

export const messagesReducer = (state = initialState, action: MessagesActions) => {
  switch (action.type) {
    case messagesActionsType.createMessage:
      return {
        ...state,
        isLoading: true,
      };
    case messagesActionsType.createMessageSuccess:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case messagesActionsType.createMessageError:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case messagesActionsType.getMessages:
      return {
        ...state,
        isLoading: true,
      };
    case messagesActionsType.getMessagesSuccess:
      return {
        messages: action.messagesList,
        isLoading: false,
        error: null
      };
    case messagesActionsType.getMessagesError:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
