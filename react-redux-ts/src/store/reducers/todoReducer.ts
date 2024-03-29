import { TodoState, TodoAction, TodoActionType } from "../../types/todo"

const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
  switch(action.type){
    case TodoActionType.FETCH_TODOS:
      return {...state, loading: true}
    case TodoActionType.FETCH_TODOS_SUCCESS:
      return {...state, loading: false, todos: action.payload}
    case TodoActionType.FETCH_TODOS_ERROR:
      return {...state, loading: false, error: action.payload}
    case TodoActionType.SET_TODO_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}