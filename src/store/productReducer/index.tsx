import { SET_ALL_CATEGORIES, SET_ALL_PRODUCT, SET_MASTER_LIST } from './actions';
import { ProduceStateModel } from './types';

const INITIAL_STATE: ProduceStateModel = {
    categories: [],
    allProduct: [],
    masterList: []
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SET_ALL_CATEGORIES:
            return { ...state, categories: action.payload };

        case SET_ALL_PRODUCT:
            return { ...state, allProduct: action.payload };

        case SET_MASTER_LIST:

                return { ...state, masterList: action.payload };
                
        default:
            return state;
    }
};

export default reducer;
