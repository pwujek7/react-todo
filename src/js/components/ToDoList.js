import React from 'react';

import ToDoItem from './ToDoItem.js';

class ToDoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <ToDoItem />
        </ul>
      </div>
    )
  }
}

export default ToDoList;
