import { useState } from "react"
import Link from 'next/link'

export default function Users() {
  const [users, setUsers] = useState([
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Petya'}
  ])
  return (
    <div>
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
    </div>
  )
}
