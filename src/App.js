import React, { Component } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: "",
      noteId: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh
    if(this.state.inputText !== '') {
      const newTask = {
        id: this.state.noteId,
        text: this.state.inputText,
        completed: false
      };

      this.setState( prevState => ({
        noteId: prevState.noteId + 1,
        inputText: "",
        todos: [...prevState.todos, newTask]
      }));
    }
  }

  handleRemove(id) {
    console.log("poistetaan", id);
  }

  render() {
    const todoItems = this.state.todos.map( item =>
      <TodoItem
        key = { item.id }
        item = { item }
        handleChange = { this.handleChange }
        handleRemove = { this.handleRemove }
      />)

    return (
      <div className="app">
        <main className="app-main">
          <div className="todo-list">
            <Header />
            {this.state.todos.length === 0 ? <p>No Notes</p> : todoItems}
            <AddItem
              text = { this.state.inputText }
              handleInputChange = { this.handleInputChange }
              handleSubmit = { this.handleSubmit }
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
