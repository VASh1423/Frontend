import './message.css';
import {format} from 'timeago.js'

export default function Message({message, own}) {

  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img className='messageImg' src="https://i.pinimg.com/originals/57/05/80/5705809a36e64dd43c417e0404bc5ffd.jpg" alt="" />
        <p className='messageText'>{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
