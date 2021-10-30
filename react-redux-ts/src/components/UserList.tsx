import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelectop';

const UserList: React.FC = () => {
  const {error, users, loading} = useTypedSelector(state => state.user)
  const {fetchUser} = useAction()

  useEffect(() => {
    fetchUser()
  }, [])

  if(loading){
    return <h1>Идет загрузка</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }
  
  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  )
}

export default UserList