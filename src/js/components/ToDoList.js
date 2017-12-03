import React from 'react';

import ToDoItem from './ToDoItem.js';
import ToDoInput from './ToDoInput.js';

let tasks = [];

class ToDoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: tasks
    }

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(item) {
    let updatedTasks = this.state.todos.filter((value) => {
      return item !== value;
    });
    this.setState({
      todos: updatedTasks
    });
  }

  addItem(item) {
    let updatedTasks = this.state.todos;
    updatedTasks.push(item);
    this.setState({
      todos: updatedTasks
    });
  }

  render() {
    let todos = this.state.todos;
    todos = todos.map((todo, i) => {
      return (<ToDoItem item={todo} key={i} onDelete={this.deleteItem}/>)
    });

    return (
      <div className="container">
        <h1 className="container__title">To do list</h1>
        <ToDoInput onAdd={this.addItem}/>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
