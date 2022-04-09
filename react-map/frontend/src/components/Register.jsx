import './register.css'
import RoomIcon from '@mui/icons-material/Room';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function Register({setShowRegister}) {
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    try {
      await axios.post('/users/register', newUser)
      setFailure(false)
      setSuccess(true)
    } catch (error) {
      setFailure(true)
    }
  }

  return (
    <div className='registerContainer'>
      <div className="logo">
        <RoomIcon/> VASh Pin
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' ref={nameRef}/>
        <input type="email" placeholder='email' ref={emailRef}/>
        <input type="password" placeholder='password' ref={passwordRef}/>
        <button className='registerButton'>Register</button>
        {success && 
          <span className='success'>Successful. You can login now!</span>
        }
        {failure && 
          <span className='failure'>Something went wrong!</span>
        }
      </form>
      <CancelIcon className='registerCancel' onClick={() => setShowRegister(false)}/>
    </div>
  )
}
