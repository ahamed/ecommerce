import showActionTypes from './shop.types';

const { ADD_SHOP_COLLECTIONS } = showActionTypes;

export const addShopCollections = collections => ({
    type: ADD_SHOP_COLLECTIONS,
    payload: collections
});