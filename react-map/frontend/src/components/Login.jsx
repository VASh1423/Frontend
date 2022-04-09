import './login.css'
import RoomIcon from '@mui/icons-material/Room';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function Login({setShowLogin, myStorage, setCurrentUser}) {
  const [failure, setFailure] = useState(false)
  const nameRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value
    }

    try {
      const res = await axios.post('/users/login', user)
      myStorage.setItem('user', res.data.username)
      setCurrentUser(res.data.username)
      setShowLogin(false)
      setFailure(false)
    } catch (error) {
      setFailure(true)
    }
  }

  return (
    <div className='loginContainer'>
      <div className="logo">
        <RoomIcon/> VASh Pin
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' ref={nameRef}/>
        <input type="password" placeholder='password' ref={passwordRef}/>
        <button className='loginButton'>Login</button>
        {failure && 
          <span className='failure'>Something went wrong!</span>
        }
      </form>
      <CancelIcon className='loginCancel' onClick={() => setShowLogin(false)}/>
    </div>
  )
}
