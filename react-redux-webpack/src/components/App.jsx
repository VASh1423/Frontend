import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './app.less'
import Card from './card/Card'
import Main from './main/Main'

export default function App(){
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/card' component={Card}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
