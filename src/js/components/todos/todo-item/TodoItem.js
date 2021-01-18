import React, { Component } from 'react'
import moment from 'moment'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      title: this.props.todo.title,
      completed: this.props.todo.completed,
    }
  }
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }
  handleDueDateChange(event) {
    console.log(event);
    this.setState({
      dueDate: event
    })
  }
  handleFocusChange(event) {
    console.log(event);
    this.setState({
      focused: event.focused
    })
  }
  render() {
    const {
      todo = {},
      handleComplete,
      handleTitleChange,
      handleUpdate,
      handleDelete,
    } = this.props

    return (
      <li>
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <div>
          <div 
            contentEditable
            className="todo-title"
            onBlur={(e) => handleUpdate(e, e.target.innerText)}
            onKeyUp={(e) => handleTitleChange(e, e.target.innerText) }
          >
            {todo.title}
          </div>
            {todo.dueDate && (
              <div className="due-date">
                &#128336;&nbsp; {moment(todo.dueDate).format("LT - Do MMM, YYYY")}
              </div>
            )}
          </div>
          <span className="btn-wrapper">
            {
              <>
                <div
                  className="btn-circle btn-chars btn-complete"
                  onClick={handleComplete}
                >
                  &#x2713;
                </div>
                <div
                  className="btn-circle btn-chars btn-cancel"
                  onClick={handleDelete}
                >
                  &#215;
                </div>
              </>
            }
          </span>
        </div>
      </li>
    )
  }
}

export default TodoItem