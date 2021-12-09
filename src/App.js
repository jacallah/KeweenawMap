import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";
import * as parkDate from "./data/parks.json";
import * as hikeDate from "./data/hiking.json";
import * as barDate from "./data/bar-resturant.json";
import * as beachesDate from "./data/beaches.json";
import * as bikingDate from "./data/Biking.json";
import * as lodgingDate from "./data/lodging.json";
import * as poiDate from "./data/points of interest.json";
import * as park1Date from "./data/parks";
import * as skiDate from "./data/ski-snowboard.json";
import * as waterfallDate from "./data/waterfalls.json";
import bench from "./bench.jpg";
import hike from "./hike.png";
import bar from "./bar-resturant.png";
import beach from "./beach.png";
import biking from "./biking.png";
import lodging from "./lodging.png";
import poi from "./exclamation.png";
import ski from "./ski-snowboard.png";
import waterfall from "./waterfall.png";
import "./App.css";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 47.1211,
    longitude: -88.5694,
    width: "100vw",
    height: "100vh",
    zoom: 10,
    minZoom: 9,
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="container">
      <EasybaseProvider ebconfig={ebconfig}>
        <div>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoicGluZ3VjYXNleSIsImEiOiJja3Y0NWN3YTE4bXE2MnVvOG11MjZtNnBiIn0.A2cMs0IY0S8Gruki4vo6cQ"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            <div className="menu">This is a test</div>
            {parkDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={bench} alt="CYAP" />
                </button>
              </Marker>
            ))}
            {hikeDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={hike} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {barDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={bar} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {beachesDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={beach} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {bikingDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={biking} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {lodgingDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={lodging} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {poiDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={poi} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {poiDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={poi} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {park1Date.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={bench} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {skiDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={ski} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {waterfallDate.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src={waterfall} alt="CYAP" />
                </button>
              </Marker>
            ))}

            {selectedPark ? (
              <Popup
                class="pop"
                latitude={selectedPark.geometry.coordinates[1]}
                longitude={selectedPark.geometry.coordinates[0]}
                closeOnClick={true}
                onClose={() => {
                  setSelectedPark(null);
                }}
              >
                <div class="locationDescript">
                  <h2>{selectedPark.properties.NAME}</h2>
                  <p align={"justify"}>{selectedPark.properties.DESCRIPTIO}</p>
                  <p>
                    <img
                      src={selectedPark.properties.PICTURE_LI}
                      title={selectedPark.properties.NAME}
                      alt={selectedPark.properties.NAME}
                      max-height={300}
                      width={400}
                    ></img>
                  </p>
                  <p>{selectedPark.properties.ADDRESS}</p>
                  <a
                    href={
                      "https://google.com/maps/dir//" +
                      selectedPark.properties.ADDRESS
                    }
                  >
                    Directions
                  </a>
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
      </EasybaseProvider>
    </div>
  );
}
