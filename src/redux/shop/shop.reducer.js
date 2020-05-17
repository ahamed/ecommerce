import shopActionTypes from './shop.types';

const { ADD_SHOP_COLLECTIONS } = shopActionTypes;

const INITIAL_STATE = {
    collections: {}
}


const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SHOP_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;