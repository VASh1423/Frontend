import React from 'react'
import Head from "next/head"
import A from './A'

export default function MainContainer({children}) {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <div className='navbar'>
        <A href='/' text='Главная страница'/>
        <A href='/users' text='Список пользователей'/>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar{
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  )
}
