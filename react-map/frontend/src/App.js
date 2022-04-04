import Map from 'react-map-gl';

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
      />
    </div>
  );
}

export default App;
