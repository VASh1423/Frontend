import { observer } from 'mobx-react-lite'
import React from 'react'
import counter from './store/counter'

const Counter = observer(() => {
  return (
    <div>
      {'Count = ' + counter.count}
      <div>
        <button onClick={() => counter.increment()}>+</button>
        <button onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
  )
})

export default Counter