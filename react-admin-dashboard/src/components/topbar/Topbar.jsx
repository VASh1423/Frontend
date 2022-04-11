import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import './topbar.css'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">VASh admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings/>
          </div>
          <img src="https://w-dog.ru/wallpapers/3/9/444606473038196/sochi-olimpiada-2014-zima.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
