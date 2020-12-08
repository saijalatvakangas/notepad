import React, { Component } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import todoData from './components/todoData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState( prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map( item =>
      <TodoItem
        key={ item.id }
        item={ item }
        handleChange = { this.handleChange }
      />)

    return (
      <div className="app">
        <main className="app-main">
          <div className="todo-list">
            <Header />
            <div>{ todoItems }</div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
