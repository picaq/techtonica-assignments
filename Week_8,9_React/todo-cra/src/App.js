// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>Hello Techtonica!</p>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Todo from './Todo';
import './App.css';

// class Todo extends React.Component {
//   render() {
//     const { todo } = this.props;
//     return <div>{todo.text}</div>;
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   todos: [{ text: 'Walk dog' }, { text: 'Feed cat' }]
    // };
    this.state = {
      todos: [
        { text: 'Walk dog', isCompleted: false },
        { text: 'Feed cat', isCompleted: false },
        { text: 'Water plants', isCompleted: false },
        { text: 'Call boyfriend', isCompleted: true },
        { text: 'Drink water', isCompleted: true },
        { text: 'Complete code challenge', isCompleted: true },
        { text: 'Eat breakfast', isCompleted: true },
        { text: 'Take a break!', isCompleted: false },
        { text: 'Pet a cat', isCompleted: false },
        { text: 'Draw a flower', isCompleted: false }
      ]
    };
    
  }
  // New method
  updateTodo(todo, changes) {
    this.setState({
      todos: this.state.todos.map((existing) => {
        if (todo === existing) {
          return { ...existing, ...changes };
        }
        return existing;
      }),
    });
  }
  
  render() {
    const { todos } = this.state;
    // pass the method in as a prop, bound to this so it will work

    return (
      <div className="App">
        <h1>Todos</h1>
        <div>
        {todos.length && todos.map((todo, idx) => 
          ( <Todo 
            key={idx} 
            todo={todo} 
            updateTodo={this.updateTodo.bind(this)} /> ))} 
        </div> 
      </div> ); 
    } 
  }

export default App;