import React from 'react'

export default function Card(props) {
  return (
    <div>
      <button onClick={() => props.history.goBack()} className="back-btn">BACK</button>
      card repo
    </div>
  )
}
