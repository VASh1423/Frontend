import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user: {
    _id: '60e1ade12fed1b4e70fba0c1',
    username: "hey",
    email: "hey@gmail.com",
    password: "$2b$10$zwsfES55C5FU99X/I6yFfebcxngOckY3a29yGYCh3cPDZ0.Nf7bJC"
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