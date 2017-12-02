import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './components/ToDoList.js';
import './../sass/styles.scss';

class App extends React.Component {
  render() {
    return (
      <ToDoList />
    )
  }
}

let root = document.querySelector('#root');

ReactDOM.render(<App />, root);
