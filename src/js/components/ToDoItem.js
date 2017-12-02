import React from 'react';

class ToDoItem extends React.Component {
  handleDelete() {
    this.props.onDelete(this.props.item);
  }

  render() {
    return (
      <li>
        <div>
          <p>{this.props.item}</p>
          <span onClick={this.handleDelete.bind(this)}>X</span>
        </div>
      </li>
    )
  }
}

export default ToDoItem;
