import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>
      {this.props.todo.title}
      </li>
    )
  }
}

export default TodoListItem;
