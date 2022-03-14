// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')

//   const onClick = () => setToggle(prev => !prev)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])

//   return (
//     <div>
//       <h1 data-testid='value-elem'>{value}</h1>
//       {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
//       {data && <div style={{color: 'red'}}>data</div>}
//       <h1>Hello world</h1>
//       <button data-testid='toggle-btn' onClick={onClick}>click me</button>
//       <input onChange={e => setValue(e.target.value)} type="text" placeholder='input value.....' />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import UserDetailsPage from './pages/UserDetailsPage'
import AppRouter from './router/AppRouter'
import Users from './users/Users'

export default function App() {
  return (
    <div>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}
