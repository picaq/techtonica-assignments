import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    const { text, isCompleted } = todo;
    return (
      <div>
        <label><input type="checkbox" checked={isCompleted}></input>
        {text}</label>
      </div>
    );
  }
}
export default Todo;