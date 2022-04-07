import Map, {Marker, Popup} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import "mapbox-gl/dist/mapbox-gl.css";
import './app.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {format} from 'timeago.js'

function App() {
  const currentUser = "jane"
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [newPlace, setNewPlace] = useState(null)

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
                    <StarIcon className='star'/>
                    <StarIcon className='star'/>
                    <StarIcon className='star'/>
                    <StarIcon className='star'/>
                    <StarIcon className='star'/>
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
              <form>
                <label>Title</label>
                <input placeholder='enter a title'/>
                <label>Review</label>
                <textarea placeholder='about'/>
                <label>Rating</label>
                <select>
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
      </Map>
    </div>
  );
}

export default App;
