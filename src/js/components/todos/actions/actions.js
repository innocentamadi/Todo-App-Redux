import types from './actionTypes';
import todos from './data'

const getTodos = () => dispatch => (
  Promise.resolve({
    type: types.GET_TODOS,
    data: todos
  }).then(res => dispatch(res))
)

const addTodo = (todo) => dispatch => (
  Promise.resolve({
    type: types.ADD_TODO,
    data: todo
  }).then(res => dispatch(res))
)

const updateTodo = (todo) => dispatch => (
  Promise.resolve({
    type: types.UPDATE_TODO,
    data: todo
  }).then(res => dispatch(res))
)

const deleteTodo = (todo) => dispatch => (
  Promise.resolve({
    type: types.DELETE_TODO,
    data: todo
  }).then(res => dispatch(res))
)

export {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
}

export default getTodos