import React, { Component } from 'react'

class TodoInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      todo,
      handleSubmit,
      handleTitleChange,
    } = this.props

    return (
      <li>
        <div className="todo-item new-todo-item">
          <div className={`todo-title ${todo.id ? 'editing' : ''}`}
            contentEditable
            onKeyUp={(e) => handleTitleChange(e, e.target.innerText) }
            onBlur={(e) => handleSubmit(e, e.target.innerText)}
            data-placeholder="Add a new todo item"
          >
            {todo.title}
          </div>
          <span>
            {
              <div
                className="btn-circle btn-chars btn-add"
              >
                +
              </div>
            }
          </span>
        </div>
      </li>
    // <div className="todo__input">
    //   <div className="title">
    //     <input 
    //      type="text"
    //      placeholder="title.."
    //      required={true}
    //      value={todo.title}
    //      onChange={handleTitleChange}
    //     />
    //   </div>
    //   <div className="submitButton">
    //     <button onClick={handleSubmit}>Add</button>
    //   </div>    
    // </div>
    )
  }
}

export default TodoInput