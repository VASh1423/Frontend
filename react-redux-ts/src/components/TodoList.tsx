import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelectop'

const TodoList: React.FC  = () => {
  const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo)
  const {fetchTodo, setTodoPage} = useAction()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodo(page, limit)
  }, [page])

  if(loading){
    return <h1>Идет загрузка</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo => 
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}
      {pages.map(p => 
        <span
          onClick={() => setTodoPage(p)}
          style={{border:p === page ? '2px solid green' : ''}}
        >{p}</span>
      )}
    </div>
  )
}

export default TodoList
