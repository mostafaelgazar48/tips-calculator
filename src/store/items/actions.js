export const ADD_ITEM = 'ADD_ITEM';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const UPDATE_ITEM_PRICE = 'UPDATE_ITEM_PRICE';

export const addItem = (name, price) => ({
  type: ADD_ITEM,
  payload: { name, price }
});

export const removeItem = (uuid) => ({
  type: REMOVE_ITEM,
  payload: { uuid }
});

export const updateQuantity = (uuid, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { uuid, quantity }
});

export const updateItemPrice = (uuid, price) => ({
  type: UPDATE_ITEM_PRICE,
  payload: { uuid, price }
});
