import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      todoForm: {
        title: "todo 1",
        date: new Date(),
        completed: false,
      }
    }

    this.deleteTodo = this.deleteTodo.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    this.loadTodos()
  }

  loadTodos() {
    fetch("http://localhost:3300/todos")
      .then(response => response.json())
      .then(data => this.setState({ todoList: data }))

  }

  deleteTodo(todo) {
    const url_delete = `http://localhost:3300/todos/${todo.id}`
    fetch(url_delete, { method: 'DELETE' }).then(_ => this.loadTodos())
  }

  handleSubmit(event) {
    event.preventDefault()
    const form =this.state.todoForm
    const todo = {...form,dueDate:new Date(form.dueDate).getTime()};
    const url_post = `http://localhost:3300/todos`

    const p = fetch(url_post, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    p.then(_ => this.loadTodos())
}

handleInputChange(event) {
    console.log(event.target.name)
    const name = event.target.name
    const value = name == "completed" ? event.target.checked : event.target.value
    const obj = {
        todoForm:
        {
            ...this.state.todoForm, [name]: value
        }
    }
    console.log(obj)
    this.setState(obj)
}
  render() {
    const todoList = this.state.todoList
    const todoForm = this.state.todoForm
    return (
      <div>
        <TodoForm todoForm={todoForm} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <TodoList todos={todoList} onDeleteItem={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
