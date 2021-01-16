import React, { Component } from 'react'
// import TodoInput from './TodoInput'
import TodoList from '../todos'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="content-wrapper">
          <TodoList actions={this.props.actions} todos={this.props.todos}/>
        </div>
     </div>
    )
  }
}

export default App