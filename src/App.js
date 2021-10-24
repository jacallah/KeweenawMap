import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import * as parkData from "./data/skateboard-parks.json";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicGluZ3VjYXNleSIsImEiOiJja3Y0NWN3YTE4bXE2MnVvOG11MjZtNnBiIn0.A2cMs0IY0S8Gruki4vo6cQ"
        mapStyle="mapbox://styles/pingucasey/ckv4l78e45sal14mhgei763qk"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <div>SKATE</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
