import { combineReducers } from 'redux';

import productReducer from './productReducer';
// import sellerReducer from './sellerReducer';
// import buyerReducer from './buyerReducer';
// import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    product: productReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
