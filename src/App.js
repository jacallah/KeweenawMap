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
import "./index.css";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

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
    // <EasybaseProvider
    //   ebconfig={ebconfig}
    //   className="test"
    //   style={{ zIndex: 0 }}
    // >
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    //   <ReactMapGL
    //     {...viewport}
    //     mapboxApiAccessToken="pk.eyJ1IjoicGluZ3VjYXNleSIsImEiOiJja3Y0NWN3YTE4bXE2MnVvOG11MjZtNnBiIn0.A2cMs0IY0S8Gruki4vo6cQ"
    //     onViewportChange={(viewport) => {
    //       setViewport(viewport);
    //     }}
    //   >
    //     {parkDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={bench} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}
    //     {hikeDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={hike} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {barDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={bar} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {beachesDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={beach} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {bikingDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={biking} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {lodgingDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={lodging} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {poiDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={poi} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {poiDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={poi} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {park1Date.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={bench} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {skiDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={ski} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {waterfallDate.features.map((park) => (
    //       <Marker
    //         key={park.properties.PARK_ID}
    //         latitude={park.geometry.coordinates[1]}
    //         longitude={park.geometry.coordinates[0]}
    //       >
    //         <button
    //           className="marker-btn"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedPark(park);
    //           }}
    //         >
    //           <img src={waterfall} alt="CYAP" />
    //         </button>
    //       </Marker>
    //     ))}

    //     {selectedPark ? (
    //       <Popup
    //         latitude={selectedPark.geometry.coordinates[1]}
    //         longitude={selectedPark.geometry.coordinates[0]}
    //         closeOnClick={false}
    //         onClose={() => {
    //           setSelectedPark(null);
    //         }}
    //       >
    //         <div>
    //           <h2>{selectedPark.properties.NAME}</h2>
    //           <p>{selectedPark.properties.DESCRIPTIO}</p>
    //           <p>{selectedPark.properties.ADDRESS}</p>
    //           <a
    //             href={
    //               "https://google.com/maps/dir//" +
    //               selectedPark.properties.ADDRESS
    //             }
    //           >
    //             Directions
    //           </a>
    //         </div>
    //       </Popup>
    //     ) : null}
    //   </ReactMapGL>
    // </EasybaseProvider>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
