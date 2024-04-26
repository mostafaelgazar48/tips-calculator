import { createSelector } from 'reselect';

export const selectedItems = (state) => state.items;

export const tipPercentage = (state) => state.tipPercentage;

export const selectedItem = (state, props) => {
  const items = selectedItems(state);
  return items.find((item) => item.uuid === props.uuid);
};

export const selectorSubtotal = createSelector([selectedItems], (items) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const selectorTipAmount = createSelector(
  [selectorSubtotal, tipPercentage],
  (subtotal, tipPercentage) => {
    return subtotal * (tipPercentage / 100);
  }
);

export const selectorTotal = createSelector(
  [selectorSubtotal, selectorTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);

export const selectorItemTotal = createSelector([selectedItem], (item) => {
  console.log(item);
  return item?.price * item?.quantity;
});
