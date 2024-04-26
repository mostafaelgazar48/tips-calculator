import { connect } from 'react-redux';
import NewItemForm from '../components/NewItemForm';
import { addItem } from '../store/items/actions';

const mapDispatchToProps = {
  onSubmit: (name, price) => addItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
