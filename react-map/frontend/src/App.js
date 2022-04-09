import Map, {Marker, Popup} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import "mapbox-gl/dist/mapbox-gl.css";
import './app.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {format} from 'timeago.js'
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const myStorage = window.localStorage
  const [currentUser, setCurrentUser] = useState(myStorage.getItem('user'))
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [newPlace, setNewPlace] = useState(null)
  const [title, setTitle] = useState(null)
  const [desc, setDesc] = useState(null)
  const [rating, setRating] = useState(0)
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get('/pins')
        setPins(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    getPins()
  }, [])

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id)
  }

  const handleAddClick = (e) => {
    const lat = e.lngLat.lat
    const long = e.lngLat.lng
    setNewPlace({
      lat,
      long
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPin = {
      username: currentUser,
      title,
      desc,
      rating,
      lat: newPlace.lat,
      long: newPlace.long,
    }

    try {
      const res = await axios.post('/pins', newPin)
      setPins([...pins, res.data])
      setNewPlace(null)
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    myStorage.removeItem('user')
    setCurrentUser(null)
  }

  return (
    <div className="App">
      <Map
        initialViewState={{
          longitude: 30,
          latitude: 50,
          zoom: 4
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        style={{width: '100vw', height: '100vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onDblClick={handleAddClick}
      >
        {pins.map(p => (
          <>
            <Marker longitude={p.long} latitude={p.lat} >
              <RoomIcon style={{color: p.username === currentUser ? 'tomato' : 'slateblue', cursor: 'pointer'}} onClick={() => handleMarkerClick(p._id)}/>
            </Marker>
            {p._id !== currentPlaceId &&
              <Popup longitude={p.long} latitude={p.lat} anchor="left" onClose={() => setCurrentPlaceId(null)}>
                <div className='card'>
                  <label>Place</label>
                  <h4 className='place'>{p.title}</h4>
                  <label>Review</label>
                  <p className='desc'>{p.desc}.</p>
                  <label>Rating</label>
                  <div className='stars'>
                    {Array(p.rating).fill(<StarIcon className='star'/>)}
                  </div>
                  <label>Information</label>
                  <span className='username'>Created by <b>{p.username}</b></span>
                  <span className='date'>{format(p.createdAt)}</span>
                </div>
              </Popup>
            }
          </>
        ))}
        {newPlace && (
          <Popup longitude={newPlace.long} latitude={newPlace.lat} anchor="left">
            <div>
              <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input placeholder='enter a title' onChange={e => setTitle(e.target.value)}/>
                <label>Review</label>
                <textarea placeholder='about' onChange={e => setDesc(e.target.value)}/>
                <label>Rating</label>
                <select  onChange={e => setRating(e.target.value)}>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
                <button className='submitBtn' type='submit'>Add pin</button>
              </form>
            </div>
          </Popup>
        )}
        <div className='buttons'>
          {currentUser ? 
          <button className='button logout' onClick={handleLogout}>Log out</button>
          :
          <>
            <button className='button login' onClick={() => setShowLogin(true)}>Log in</button>
            <button className='button register' onClick={() => setShowRegister(true)}>Register</button>
          </>
          }
        </div>
        {showRegister && <Register setShowRegister={setShowRegister}/>}
        {showLogin && <Login setShowLogin={setShowLogin} myStorage={myStorage} setCurrentUser={setCurrentUser}/>}
      </Map>
    </div>
  );
}

export default App;
