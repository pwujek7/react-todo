import React from 'react';

class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <form className="container__form" onSubmit={this.handleSubmit}>
        <input className="container__input" type="text" value={this.state.value} onChange={this.handleChange} required/>
        <button className="container__btn" type="submit">Add</button>
      </form>
    )
  }
}

export default ToDoInput;
