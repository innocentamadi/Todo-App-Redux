import React, { Component } from 'react'

//===== INTERNAL =====
import Modal from 'js/components/shared/modal'
import TodoItem from '../todo-item'
import AddTodoForm from '../add-todo-form'

import './todo-list.css'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      showAddTodo: false,
      showModal: false,
      modalCallback: null,
      modalText: null,
    }
    
    this.toggleTodoForm = this.toggleTodoForm.bind(this)
    this.setShowModal = this.setShowModal.bind(this)
  }

  setShowModal(showModal, modalCallback, modalText) {
    this.setState({ showModal, modalCallback, modalText })
  }

  toggleTodoForm() {
    this.setState({ showAddTodo: !this.state.showAddTodo })
  }

  render() {
    const { todos = [] } = this.props
    const { showAddTodo, showModal } = this.state
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
            todos && todos.filter(item => !item.completed).reverse().map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo} 
                setShowModal={this.setShowModal}
                updateTodo={this.props.updateTodo}
                deleteTodo={this.props.deleteTodo} />
            ))
          }
        <p className="label-completed">
          Completed
        </p>
          {
            todos && todos.filter(item => item.completed).reverse().map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo} 
                setShowModal={this.setShowModal}
                updateTodo={this.props.updateTodo}
                deleteTodo={this.props.deleteTodo} />
            ))
          }
        </ul>
        {showModal && (
          <Modal text={this.state.modalText}
            onClose={() => this.setShowModal(false)}
            onConfirm={this.state.modalCallback} />
        )}
      </>
    )
  }
}

export default TodoList