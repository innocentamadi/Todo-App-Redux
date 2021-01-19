import actionTypes from 'js/components/todos/actions/actionTypes'

const defaultState = [];

let reducer = (state = defaultState, action) => {
  let todos;
  switch (action.type) {
    case actionTypes.GET_TODOS:
      return Object.assign([], state, [
        ...state,
        ...action.data,
      ])

    case actionTypes.ADD_TODO:
      return Object.assign([], state, [
        ...state,
        {
          ...action.data,
          id: state.length + 1,
          completed: false,
        },
      ])

    case actionTypes.UPDATE_TODO:
      todos = state.map(todo => (
        todo.id === action.data.id
          ? action.data
          : todo
      ))
      return Object.assign([], state, todos)

    case actionTypes.DELETE_TODO:
      todos = state.filter(todo => todo.id !== action.data.id)
      return Object.assign([], todos)

    default:
      return state;
    }
}
export default reducer