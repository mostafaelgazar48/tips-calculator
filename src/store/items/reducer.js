import { produce } from 'immer';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM_PRICE,
  UPDATE_QUANTITY
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Redux', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Store', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ADD_ITEM) {
    const newItem = {
      uuid: id++,
      name: action.payload.name,
      price: action.payload.price,
      quantity: 1
    };

    return produce(state, (draftState) => {
      draftState.push(newItem);
    });
  }

  if (action.type === REMOVE_ITEM) {
    return produce(state, (draftState) => {
      const index = draftState.findIndex(
        (item) => item.uuid === action.payload.uuid
      );
      draftState.splice(index, 1);
    });
  }

  if (action.type === UPDATE_QUANTITY) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid);
      item.quantity = parseInt(action.payload.quantity);
    });
  }

  if (action.type === UPDATE_ITEM_PRICE) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid);
      item.price = parseInt(action.payload.price);
    });
  }

  return state;
};

export default reducer;
