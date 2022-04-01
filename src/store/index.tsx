import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = applyMiddleware(thunkMiddleware);

const store: any = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
