import './chatOnline.css'

export default function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className='chatOnlineImg' src="https://i.pinimg.com/736x/52/59/99/5259996be62e70b07ef9bd215320c4a0--peregrine-falcon-kestrel.jpg" alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">John Doe</span>
      </div>
    </div>
  )
}
