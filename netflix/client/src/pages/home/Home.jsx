import { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import { Navbar } from '../../components/navbar/Navbar'
import axios from 'axios'
import './home.scss'

export const Home = ({type}) => {
  const [list, setList] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type="+type : ""}${genre ? "&genre="+genre : ""}`, {
          headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjY4MTIzNGQ4Njg0NWFhNGJkMDJlYWQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTE3NjYzNTYsImV4cCI6MTY1MjE5ODM1Nn0.omF9cdAnghHEWh8li2gls9mVE35CzwR2njHTZmvQsfI'
          }
        })
        console.log(res.data);
        setList(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getRandomList()
  }, [type, genre])

  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type}/>
      {list.map((list) => (
        <List list={list}/>
      ))}
    </div>
  )
}
