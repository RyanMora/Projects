import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = () => (
  createStore(RootReducer, applyMiddleware(thunk))
);

export default configureStore;
