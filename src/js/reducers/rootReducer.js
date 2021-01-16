import { combineReducers } from 'redux';
import todos from 'js/components/todos/reducers'

let rootReducer = combineReducers({
  todos
})

export default rootReducer