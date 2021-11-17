import { useState } from "react"
import Link from 'next/link'
import MainContainer from "../components/MainContainer"

export default function Users({users}) {

  return (
    <MainContainer>
      <h1>Список пользователей</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>
                {user.name}
              </a>
          </Link>
          </li>
        )}
      </ul>
    </MainContainer>
  )
}

export async function getStaticProps(context){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return{
    props: {users},
  }
}
