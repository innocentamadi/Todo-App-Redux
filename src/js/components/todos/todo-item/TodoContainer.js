import React, { Component} from 'react'
import TodoItem from './TodoItem';


class TodoContainer extends Component {
  constructor() {
    super()
    this.handleComplete = this.handleComplete.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    const res = window.confirm(`Are you sure you want to delete "${this.props.todo.title}?"`)
    if (res) this.props.deleteTodo(this.props.todo)
  }

  handleTitleChange(event, title) {
    if ([13, 27].find(key => key === event.keyCode)) {
      this.handleUpdate(event, title)
      event.target.innerText = ''
    }
  }

  handleUpdate(event, title) {
    this.props.updateTodo({...this.props.todo, title})
  }

  handleComplete() {
    this.props.updateTodo({
      ...this.props.todo,
      completed: !this.props.todo.completed
    })
  }

  render () {
    return (
      <TodoItem 
        {...this.props}
        handleTitleChange={this.handleTitleChange}
        handleComplete={this.handleComplete}
        handleUpdate={this.handleUpdate}
        handleDelete={this.handleDelete}
      />
    )
  }
}

export default TodoContainer
