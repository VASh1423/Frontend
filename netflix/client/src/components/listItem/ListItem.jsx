import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './listItem.scss'
import { Link } from 'react-router-dom';

export default function ListItem({index, item}) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  console.log(item);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/'+item, {
          headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjY4MTIzNGQ4Njg0NWFhNGJkMDJlYWQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTE3NjYzNTYsImV4cCI6MTY1MjE5ODM1Nn0.omF9cdAnghHEWh8li2gls9mVE35CzwR2njHTZmvQsfI'
          }
        })
        setMovie(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    getMovie()
  }, [item])

  return (
    <Link to={{pathname: '/watch', movie: movie}}>
      <div className='listItem' style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img
          src={movie.img}
          alt=""
        />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className='limit'>+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
                {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}
