import { useRef } from 'react'
import './login.css'

export default function Login() {
  const email = useRef()
  const password = useRef()

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">My social</h3>
          <span className="loginDesc">Connect with friend and the world around you!</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input 
              placeholder="Email" 
              type='email' 
              required
              className="loginInput" 
              ref={email} 
            />
            <input 
              placeholder="Password" 
              type='password' 
              required
              minLength='6'
              className="loginInput" 
              ref={password} 
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
