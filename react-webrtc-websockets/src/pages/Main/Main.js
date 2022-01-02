import React, { useEffect, useRef, useState } from 'react'
import socket from '../../socket'
import ACTIONS from '../../socket/actions'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'

export default function Main() {
  const history = useNavigate()
  const [rooms, updateRooms] = useState([])
  const rootNode = useRef()

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []}) => {
      if(rootNode.current){
        updateRooms(rooms)
      }
    })
  }, [])

  return (
    <div ref={rootNode}>
      <h1>
        Available Rooms
      </h1>
      <ul>
        {rooms.map(roomID => (
          <li key={roomID}>
            {roomID}
            <button onClick={() => {
              history(`/room/${roomID}`)
            }}>JOIN ROOM</button>
          </li>
        ))}
      </ul>
      <button onClick={() => {
        history(`/room/${v4()}`)
      }}>Create New Room</button>
    </div>
  )
}
