import reducer from './reducer';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

let intialState: UserState = {
  user: {
    id: '',
    username: '',
    pets: []
  }
};
try {
  intialState = sessionStorage.getItem('robopet')
    ? JSON.parse(sessionStorage.getItem('robopet') || '')
    : {};
} catch (error) {
  console.log('getError', error);
}
const saver =
  (store: { getState: () => any }) =>
  (next: (arg0: any) => any) =>
  (action: any) => {
    const stateToSave = store.getState();
    console.log('data', stateToSave);

    sessionStorage.setItem('robopet', JSON.stringify({ ...stateToSave }));
    return next(action);
  };
const store: Store<UserState, UserAction> & {
  dispatch: DispatchType;
} = createStore(reducer, intialState, applyMiddleware(thunk, saver));
export default store;
