import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css';
import { CREATE_USER } from './mutations/user';
import { GET_ALL_USERS } from './query/user';

function App() {
  const {data, loading, error, refetch} = useQuery(GET_ALL_USERS)
  const [newUser] = useMutation(CREATE_USER)
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    if(!loading){
      setUsers(data.getAllUsers)
    }
  }, [data])

  const addUser = (e) => {
    e.preventDefault()
    newUser({
        variables: {
            input: {
                username, age
            }
        }
    }).then(({data}) => {
        console.log(data)
        setUsername('')
        setAge(0)
    })
}

  const getAll = e => {
    e.preventDefault()
    refetch()
  }

  if (loading) {
      return <h1>Loading...</h1>
  }

  return (
    <div>
      <form>
        <input value={username} onChange={e => setUsername(e.target.value)} type='text'/>
        <input value={age} onChange={e => setAge(e.target.value)} type='number'/>
        <div className='btns'>
          <button onClick={(e) => addUser(e)}>Создать</button>
          <button onClick={e => getAll(e)}>Получить</button>
        </div>
      </form>
      <div>
        {users.map(user =>
          <div className='user'>{user.id}. {user.username} {user.age}</div>
        )}
      </div>
    </div>
  );
}

export default App;
