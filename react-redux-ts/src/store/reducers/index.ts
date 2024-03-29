import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>