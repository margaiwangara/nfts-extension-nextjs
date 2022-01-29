import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
}

export const wrapper = createWrapper(configureStore);
