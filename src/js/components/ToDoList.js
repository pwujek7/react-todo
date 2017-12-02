import React from 'react';

import ToDoItem from './ToDoItem.js';

let tasks = ['task one', 'task two', 'task three'];

class ToDoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: tasks
    }

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(item) {
    let updatedTasks = this.state.todos.filter((value) => {
      return item !== value;
    });
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
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
