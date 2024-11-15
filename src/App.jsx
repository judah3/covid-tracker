import React from 'react';
import Routes from "routes/Routes"
import { MapProvider } from "context/MapContext"
import "./App.css"
const App = () => {
  return (
    <MapProvider>
      <Routes />
    </MapProvider>
  )
}

export default App;
