import { connect } from 'react-redux';
import StepListItem from './step_list_item';
// Actions
import { updateStep, destroyStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { step }) => ({
  destroyStep: () => dispatch(removeStep(step)),
  updateStep: step => dispatch(receiveStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
