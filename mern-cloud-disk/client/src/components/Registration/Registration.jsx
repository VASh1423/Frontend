import { useState } from 'react'
import { registration } from '../../action/user'
import Input from '../../utils/Input/Input'
import './registration.scss'

export default function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='registration'>
      <div className="registration__header">Регистрация</div>
      <Input value={email} setValue={setEmail} type='email' placeholder='Введите email...'/>
      <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль...'/>
      <button className="registration__btn" onClick={() => registration(email, password)}>Войти</button>
    </div>
  )
}
