import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjY4MTIzNGQ4Njg0NWFhNGJkMDJlYWQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTE3NjYzNTYsImV4cCI6MTY1MjE5ODM1Nn0.omF9cdAnghHEWh8li2gls9mVE35CzwR2njHTZmvQsfI'
          }
        })
        setNewUsers(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    getNewUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
