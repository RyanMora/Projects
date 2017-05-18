import {
  RECEIVE_TODOS,
  RECEIVE_TODO
} from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_TODOS:
      nextState = {};
      actions.toos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    default:
      return state;
  }
}

export default todosReducer;
