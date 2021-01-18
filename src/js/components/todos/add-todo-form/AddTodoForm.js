import React, { Component } from 'react'
import DateTime from 'react-datetime'

import "react-datetime/css/react-datetime.css"

class TodoInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      todo,
      handleSubmit,
      handleTitleChange,
      handleDueDateChange,
      dueDateVisible,
      toggleDueDateVisible,
      todoTitleEl
    } = this.props

    return (
      <li>
        <div className="todo-item new-todo-item">
          <div className={`todo-title ${todo.id ? 'editing' : ''}`}
            ref={todoTitleEl}
            contentEditable
            onKeyUp={handleTitleChange}
            data-placeholder="Add a new todo item"
          >
            {todo.title}
          </div>
          <span className="btn-wrapper">
            {
              <>
                {!dueDateVisible && (
                  <div className="btn-circle btn-chars btn-clock" onClick={toggleDueDateVisible}>
                    &#x23F0;
                  </div>
                )}
                <div
                  className="btn-circle btn-chars btn-add"
                  onClick={handleSubmit}>
                  +
                </div>
              </>
            }
          </span>
          {dueDateVisible && (
            <div className="due-date-selector">
              <span className="label">Select a due date</span>
              <DateTime closeOnSelect onChange={handleDueDateChange} />
              <span className="btn-times" onClick={toggleDueDateVisible}>
                &#215;
              </span>
            </div>
          )}
        </div>
      </li>
    )
  }
}

export default TodoInput