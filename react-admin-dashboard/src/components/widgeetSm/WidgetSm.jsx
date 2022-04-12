import {Visibility} from '@mui/icons-material';
import './widgetSm.css'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://uprostim.com/wp-content/uploads/2021/05/image007-8-scaled.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Cat Cat</span>
            <span className="widgetSmUserTitle">Frontend developer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://uprostim.com/wp-content/uploads/2021/05/image007-8-scaled.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Cat Cat</span>
            <span className="widgetSmUserTitle">Frontend developer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://uprostim.com/wp-content/uploads/2021/05/image007-8-scaled.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Cat Cat</span>
            <span className="widgetSmUserTitle">Frontend developer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://uprostim.com/wp-content/uploads/2021/05/image007-8-scaled.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Cat Cat</span>
            <span className="widgetSmUserTitle">Frontend developer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://uprostim.com/wp-content/uploads/2021/05/image007-8-scaled.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Cat Cat</span>
            <span className="widgetSmUserTitle">Frontend developer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
      </ul>
    </div>
  )
}
