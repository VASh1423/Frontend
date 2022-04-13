import {CalendarToday, LocationSearching, MailOutline, PermIdentity, Publish} from '@mui/icons-material';
import './user.css'

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://i.pinimg.com/originals/54/11/da/5411da894cbe3a460f56591cdce52330.jpg" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Backer</span>
              <span className="userShowUserTitle">Frontend developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className='userShowIcon'/>
              <span className="userShowInfoTitle">annabacker88</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday  className='userShowIcon'/>
              <span className="userShowInfoTitle">04.10.1988</span>
            </div>
            <div className="userShowInfo">
              <MailOutline  className='userShowIcon'/>
              <span className="userShowInfoTitle">annabacker88@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching  className='userShowIcon'/>
              <span className="userShowInfoTitle">New-York</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder='annabacker88' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Full name</label>
                <input type="text" placeholder='Anna Backer' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder='annabacker88@gmail.com' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='New York' className='userUpdateInput' />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://i.pinimg.com/originals/54/11/da/5411da894cbe3a460f56591cdce52330.jpg" alt="" className="userUpdateImg" />
                <label htmlFor="file"><Publish/></label>
                <input type="file" id='file' style={{display: 'none'}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
