import React, { Component } from 'react'
import AddTodoForm from './AddTodoForm'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: {
        title: ''
      }
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTitleChange(event, title) {
    // submit on enter or esc
    if ([13, 27].find(key => key === event.keyCode)) {
      this.handleSubmit(event, title)
      event.target.innerText = ''
    }
  }

  handleSubmit(event, title) {
    event.preventDefault()
    if (!title) return

    this.props.addTodo({ title })
    this.setState({
      todo: { title: '' }
    })
    this.props.toggleTodoForm()
  }

  render() {
    return (
      <AddTodoForm
        {...this.props}
        todo={this.state.todo}
        handleTitleChange={this.handleTitleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default TodoInput