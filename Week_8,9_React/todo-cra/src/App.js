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
        { text: 'Call boyfriend', isCompleted: false },
        { text: 'Drink water', isCompleted: false },
        { text: 'Complete code challenge', isCompleted: false },
        { text: 'Eat breakfast', isCompleted: false },
        { text: 'Take a break!', isCompleted: false },
        { text: 'Pet a cat', isCompleted: false },
        { text: 'Draw a flower', isCompleted: false }
      ]
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>Todos</h1>
        <div>
          {todos.length &&
            todos.map((todo, idx) => <Todo key={idx} todo={todo} />)}
        </div>
      </div>
    );
  }
}

export default App;