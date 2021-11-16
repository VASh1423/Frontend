import Link from 'next/link'
import A from '../components/A'

export default function Index() {
  return (
    <div>
      <div className='navbar'>
        <A href='/' text='Главная страница'/>
        <A href='/users' text='Список пользователей'/>
      </div>
      <h1>Главная страница</h1>
      <style jsx>
        {`
          .navbar{
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </div>
  )
}
