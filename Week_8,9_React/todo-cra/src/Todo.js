import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    const { text, isCompleted } = todo;
    return (
      <label>
        <input type="checkbox" checked={isCompleted}></input>
        {text}
      </label>
    );
  }
}
export default Todo;