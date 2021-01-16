import React, { Component } from 'react'
import TodoItem from '../todo-item'
import AddTodoForm from '../add-todo-form'

import './todo-list.css'

class TodoList extends Component {
  constructor() {
    super()
    this.state = { showAddTodo: false }
    this.toggleTodoForm = this.toggleTodoForm.bind(this)
  }

  toggleTodoForm() {
    this.setState({ showAddTodo: !this.state.showAddTodo })
  }

  render() {
    const { todos = [] } = this.props
    const { showAddTodo } = this.state
    return (
      <>
        <div className="todo-header">
          <div className="header-wrapper">
            <h1 className="header">All Todos</h1>
          </div>
          {
            !showAddTodo && (
              <>
                <div className="btn-add-todo" onClick={this.toggleTodoForm}>
                  +
                </div>
                <hr />
                <div className="today-date">
                  {new Date().toDateString()}
                </div>
              </>
            )
          }
        </div>
        <ul className="todo-list">
          {
            showAddTodo && 
            <AddTodoForm
              addTodo={this.props.addTodo} 
              toggleTodoForm={this.toggleTodoForm} />
          }
          {
            todos && todos.reverse().map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo} 
                updateTodo={this.props.updateTodo}
                deleteTodo={this.props.deleteTodo} />
            ))
          }
        </ul>
      </>
    )
  }
}

export default TodoList