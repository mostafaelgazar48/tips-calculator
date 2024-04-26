import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectorSubtotal,
  selectorTipAmount,
  selectorTotal
} from '../store/items/selectors';

const mapStateToProps = (state) => {
  const subtotal = selectorSubtotal(state);
  const tipAmount = selectorTipAmount(state);
  const total = selectorTotal(state);
  return { subtotal, tipAmount, total };
};
export const SummaryContainer = connect(mapStateToProps)(Summary);
