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
      inputText: '',
      noteId: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  /** Change checkbox to ticked or unticked */
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todos: updatedTodos };
    });
  }

  /** Update input text value*/
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /** Add new task to To Do List*/
  handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh
    if (this.state.inputText) {
      this.setState((prevState) => ({
        noteId: prevState.noteId + 1,
        inputText: '',
        todos: [
          ...prevState.todos,
          {
            id: prevState.noteId,
            text: prevState.inputText,
            completed: false,
          },
        ],
      }));
    }
  };

  /** Remove task from To Do List */
  handleRemove(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.filter((todo) => {
        return todo.id !== id;
      });
      return { todos: updatedTodos };
    });
  }

  /** fetch tasks from local storage */
  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('data'));
    if (localStorage.getItem('data')) {
      this.setState({
        todos: userData.todos,
        inputText: '',
        noteId: userData.noteId,
      });
    }
  }

  /** update local storage */
  componentDidUpdate() {
    localStorage.removeItem('data');
    localStorage.setItem('data', JSON.stringify(this.state));
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
      />
    ));
    const addForm = (
      <AddItem
        text={this.state.inputText}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );

    return (
      <div className='app'>
        <main className='app-main'>
          <div className='todo-list'>
            <Header />
            {this.state.todos.length === 0 ? <p>No Notes</p> : todoItems}
            {addForm}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
