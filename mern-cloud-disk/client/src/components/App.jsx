import Navbar from "./Navbar/Navbar";
import './app.scss'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Registration from "./Authorization/Registration";
import Login from "./Authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../action/user";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <div className="wrap">
          {!isAuth &&
            <Switch>
              <Route path='/registration/' component={Registration}/>
              <Route path='/login/' component={Login}/>
            </Switch>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
