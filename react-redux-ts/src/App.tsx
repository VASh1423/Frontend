import React from 'react'
import TodoList from './components/TodoList'
import UserList from './components/UserList'

export default function App() {
  return (
    <div>
      <UserList/>
      <hr/>
      <TodoList/>
    </div>
  )
}

