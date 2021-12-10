import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { EasybaseProvider, Auth } from "easybase-react";
import ebconfig from "./ebconfig";
import * as parkDate from "./data/parks.json";
import * as hikeDate from "./data/hiking.json";
import * as barDate from "./data/bar-resturant.json";
import * as beachesDate from "./data/beaches.json";
import * as bikingDate from "./data/Biking.json";
import * as lodgingDate from "./data/lodging.json";
import * as poiDate from "./data/points of interest.json";
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
import legend from "./legend.png";
import "./App.css";
import "./index.css";


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

  const [show, setShow] = useState(true);


  const [showParks, setShowParks] = useState(true);
  const [showHikes, setShowHikes] = useState(true);
  const [showBars, setShowBars] = useState(true);
  const [showBeaches, setShowBeaches] = useState(true);
  const [showBikes, setShowBikes] = useState(true);
  const [showLodges, setShowLodges] = useState(true);
  const [showPois, setShowPois] = useState(true);
  const [showSkis, setShowSkis] = useState(true);
  const [showWaterfalls, setShowWaterfalls] = useState(true);

  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Auth>
        <div className="container">

          <div>
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken="pk.eyJ1IjoicGluZ3VjYXNleSIsImEiOiJja3Y0NWN3YTE4bXE2MnVvOG11MjZtNnBiIn0.A2cMs0IY0S8Gruki4vo6cQ"
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
            >
              <div className="menu">
                <div className="LegendContainer">
                  <button className="legend" onClick={() => setShow(!show)}>
                    {" "}
                    <b>Toggle Legend</b>{" "}
                  </button>
                  {show ? <div>
                    <img className="legend2" src={legend} alt="CYAP" />
                    <img className="imgicon" src={bench} alt="CYAP" onClick={() => setShowParks(!showParks)} />
                    <img className="imgicon" src={hike} alt="CYAP" onClick={() => setShowHikes(!showHikes)} />
                    <img className="imgicon" src={bar} alt="CYAP" onClick={() => setShowBars(!showBars)} />
                    <img className="imgicon" src={beach} alt="CYAP" onClick={() => setShowBeaches(!showBeaches)} />
                    <img className="imgicon" src={biking} alt="CYAP" onClick={() => setShowBikes(!showBikes)} />
                    <img className="imgicon" src={lodging} alt="CYAP" onClick={() => setShowLodges(!showLodges)} />
                    <img className="imgicon" src={poi} alt="CYAP" onClick={() => setShowPois(!showPois)} />
                    <img className="imgicon" src={ski} alt="CYAP" onClick={() => setShowSkis(!showSkis)} />
                    <img className="imgicon" src={waterfall} alt="CYAP" onClick={() => setShowWaterfalls(!showWaterfalls)} />
                  </div> : null}
                </div>
              </div>

              {parkDate.features.map((park) => (
                <div>
                  {showParks ? <Marker
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
                  </Marker> : null}
                </div>
              ))}
              {hikeDate.features.map((park) => (
                <div>
                  {showHikes ? <Marker
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
                  </Marker> : null}
                </div>
              ))}

              {barDate.features.map((park) => (
                <div>
                  {showBars ? <Marker
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
                  </Marker> : null}
                </div>
              ))}

              {beachesDate.features.map((park) => (
                <div>
                  {showBeaches ? <Marker
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
                  </Marker> : null}
                </div>
              ))}

              {bikingDate.features.map((park) => (
                <div>
                  {showBikes ? <Marker
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
                  </Marker> : null}
                </div>
              ))}

              {lodgingDate.features.map((park) => (
                <div>
                  {showLodges ? <Marker
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
                  </Marker> : null}
                </div>
              ))}

              {poiDate.features.map((park) => (
                <div>
                  {showPois ? <Marker
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
                  </Marker> : null}
                </div>
              ))}

              {skiDate.features.map((park) => (
                <div>
                  {showSkis ? <Marker
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
                  </Marker> : null}
                </div>
              ))}

              {waterfallDate.features.map((park) => (
                <div>
                  {showWaterfalls ? <Marker
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
                  </Marker> : null}
                </div>
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

        </div>
      </Auth>
    </EasybaseProvider>
  );
}
