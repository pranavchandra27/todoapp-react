import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import uuid from "uuid";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  updateTodo(id, updatedTask) {
    const updatedTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }

      return todo;
    });
    this.setState({ todos: updatedTodo });
  }

  toggleCompletion(id) {
    const completedTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });
    this.setState({ todos: completedTodo });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={uuid()}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          remove={this.removeTodo}
          update={this.updateTodo}
          toggleCompleted={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A Simple React Todo List App.</span>
        </h1>
        <ul>{todos}</ul>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
