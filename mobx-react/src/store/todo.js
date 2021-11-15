import { makeAutoObservable } from "mobx"

class Todo{
  todos = [
    {id:1, title:'Убраться', completed: false},
    {id:2, title:'Отдохнуть', completed: false}
  ]

  constructor(){
    makeAutoObservable(this)
  }
  
  addTodo(todo){
    this.todos.push(todo)
  }

  removeTodo(id){
    this.todos = this.todos.filter(todo => id !== todo.id)
  }

  completeTodo(id){
    this.todos = this.todos.map(todo => id === todo.id ? {...todo, completed: !todo.completed} : todo)
  }

  fetchTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => 
        this.todos = [...this.todos, ...json]
      )
  }
}

export default new Todo()