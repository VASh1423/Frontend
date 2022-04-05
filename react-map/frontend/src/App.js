import Map, {Marker, Popup} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import "mapbox-gl/dist/mapbox-gl.css";
import './app.css'

function App() {
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
      >
        <Marker longitude={2.294694} latitude={48.858093} >
          <RoomIcon style={{color: 'slateblue'}}/>
        </Marker>
        <Popup longitude={2.294694} latitude={48.858093}
          anchor="left">
          <div className='card'>
            <label>Place</label>
            <h4 className='place'>The Eiffel Tower</h4>
            <label>Review</label>
            <p className='desc'>Beautiful place. I like it.</p>
            <label>Rating</label>
            <div className='stars'>
              <StarIcon className='star'/>
              <StarIcon className='star'/>
              <StarIcon className='star'/>
              <StarIcon className='star'/>
              <StarIcon className='star'/>
            </div>
            <label>Information</label>
            <span className='username'>Created by <b>VASh</b></span>
            <span className='date'>1 hour ago</span>
          </div>
        </Popup>
      </Map>
    </div>
  );
}

export default App;
