import React, { Component } from 'react'

//======= INTERNAL =======
import AddTodoForm from './AddTodoForm'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: {
        title: '',
        dueDate: ''
      },
      dueDateVisible: false
    }
    this.todoTitleEl = React.createRef()
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDueDateChange = this.handleDueDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleDueDateVisible = this.toggleDueDateVisible.bind(this)
  }

  toggleDueDateVisible(dueDateVisible) {
    this.setState({ dueDateVisible: !this.state.dueDateVisible })
  }

  handleTitleChange(event) {
    // submit on enter or esc
    if ([13, 27].find(key => key === event.keyCode)) {
      this.handleSubmit(event)
      event.target.innerText = ''
    }
  }

  handleDueDateChange(date) {
    this.setState({ todo: {
      ...this.state.todo,
      dueDate: date.format('LLLL')
    }})
  }

  handleSubmit(event) {
    event.preventDefault()
    const title = this.todoTitleEl.current &&
                    this.todoTitleEl.current.innerText;
    if (!title) return

    this.props.addTodo({ ...this.state.todo, title })
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
        handleDueDateChange={this.handleDueDateChange}
        handleSubmit={this.handleSubmit}
        dueDateVisible={this.state.dueDateVisible}
        toggleDueDateVisible={this.toggleDueDateVisible}
        todoTitleEl={this.todoTitleEl}
      />
    )
  }
}

export default TodoInput