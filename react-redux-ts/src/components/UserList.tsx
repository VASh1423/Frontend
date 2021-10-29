import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelectop';

const UserList: React.FC = () => {
  const {error, users, loading} = useTypedSelector(state => state.user)
  
  return (
    <div>
      
    </div>
  )
}

export default UserList