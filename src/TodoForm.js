import React, { Component } from "react";
import uuid from "uuid";
import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuid(), completed: false };
    this.props.addTodo(newTodo);
    this.setState({ task: "" });
  }

  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add New Todo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add New Todo</button>
      </form>
    );
  }
}

export default TodoForm;
