import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user: {
    _id: '60e1b1e82fac7b53d0ad7eb0',
    username: "john",
    email: "john@gmail.com",
    password: "$2b$10$ro/YWTTCrvUbOQmqbto8GuWq/yEtOorL0KzfyQSy117W.nlX7fN7q",
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  return (
    <AuthContext.Provider 
      value={{
        user:state.user, 
        isFetching:state.isFetching, 
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}