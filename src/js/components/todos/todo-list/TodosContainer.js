import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from './TodoList';

import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from '../actions'

// -------- Components -----------

class TodosContainer extends Component {
  state = { lazyLoadEvents: false }

  componentDidMount(props) {
    this.props.getTodos()
  }

  render () {
    return <TodoList {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
