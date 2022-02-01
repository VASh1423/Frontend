import './message.css';

export default function Message({own}) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img className='messageImg' src="https://i.pinimg.com/originals/57/05/80/5705809a36e64dd43c417e0404bc5ffd.jpg" alt="" />
        <p className='messageText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
