import { UPDATE_ITEM_PRICE, UPDATE_QUANTITY } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Redux', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Store', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === 'ADD_ITEM') {
    return [
      ...state,
      {
        uuid: id++,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1
      }
    ];
  }

  if (action.type === 'REMOVE_ITEM') {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === UPDATE_QUANTITY) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return {
          ...item,
          quantity: action.payload.quantity
        };
      }
      return item;
    });
  }

  if (action.type === UPDATE_ITEM_PRICE) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return {
          ...item,
          price: action.payload.price
        };
      }
      return item;
    });
  }

  return state;
};

export default reducer;
