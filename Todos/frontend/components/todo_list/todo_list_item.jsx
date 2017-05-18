import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { todo , updateTodo } = this.props;
    const { title, done } = todo;
    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3><a onClick={this.toggleDtail}>{title}</a></h3>
          <button
            className={done ? "done" : "undone"}
            onclick={this.toggleTodo}>
            {done ? "Undo" : "Done"}
          </button>
        </div>
        {detail}
      </li>
    );
  }
}

export default TodoListItem;
