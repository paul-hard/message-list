import { Store } from '@ngrx/store';

import { GetMessagesAction } from '../reducers/messages/messages.actions';

export const initializeApplication = (store: Store) => {
  return () => new Promise(resolve => {
    store.dispatch(new GetMessagesAction());
    resolve(true);
  });
}
