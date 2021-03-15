import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    const { text, updateTodo } = todo;
    return (
      <label>
        <input 
          type="checkbox" 
          // checked={isCompleted}
          onChange={updateTodo}
        ></input>
        {text}
      </label>
    );
  }
}
export default Todo;