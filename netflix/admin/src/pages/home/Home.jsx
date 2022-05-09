import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from 'axios'

export default function Home() {
  const MONTHS = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], [])

  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjY4MTIzNGQ4Njg0NWFhNGJkMDJlYWQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTE3NjYzNTYsImV4cCI6MTY1MjE5ODM1Nn0.omF9cdAnghHEWh8li2gls9mVE35CzwR2njHTZmvQsfI'
          }
        })
        const statsList = res.data.sort((a, b) => a._id - b._id)
        statsList.map(item => 
          setUserStats(prev => [
            ...prev,
            {name: MONTHS[item._id - 1], 'New User': item.total},
          ])
        )
      } catch (error) {
        console.log(error);
      }
    }

    getStats()
  }, [MONTHS])

  console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
