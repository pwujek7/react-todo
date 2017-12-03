import React from 'react';

class ToDoItem extends React.Component {
  handleDelete() {
    this.props.onDelete(this.props.item);
  }

  render() {
    return (
      <li className="container__item">
        <p className="container__txt">{this.props.item}</p>
        <span className="container__icon" onClick={this.handleDelete.bind(this)}>x</span>
      </li>
    )
  }
}

export default ToDoItem;
