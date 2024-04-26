import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updateItemPrice,
  updateQuantity
} from '../store/items/actions';
import { selectorItemTotal } from '../store/items/selectors';

const mapStateToProps = (state, props) => {
  return {
    total: selectorItemTotal(state, props)
  };
};
const mapDispatchToProps = (dispatch, data) => {
  return {
    updateQuantity: (quantity) => dispatch(updateQuantity(data.uuid, quantity)),
    updatePrice: (price) => dispatch(updateItemPrice(data.uuid, price)),
    remove: () => dispatch(removeItem(data.uuid))
  };
};
export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
