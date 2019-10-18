import React from 'react';
import './App.css';
import ReactMapGL from 'react-map-gl';

const App = () => {
  const [state, setState] = React.useState({
    token: 'pk.eyJ1Ijoic2dtYXBib3giLCJhIjoiY2sxdzg0bTNlMDk3djNlcGE2bGkxOGpvNyJ9.nYIy2bMW9aLDDo35cn-_KA',
    viewport: {
      latitude: 33.75141633,
      longitude: -84.362823431,
      zoom: 8
    }
  });

  return (
    <div className="App">
      <ReactMapGL
        {...state.viewport}
        mapboxApiAccessToken={state.token}
        mapStyle={'mapbox://sprites/mapbox/streets-v8'}
        onViewportChange={viewport => setState({ viewport })}
      />
    </div>
  );
}

export default App;
