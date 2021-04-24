import React, {useState, useEffect, useContext} from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup,} from 'react-leaflet'
import Button from '../components/Button';
import { Icon } from "leaflet";
import startPositionMarker from '../assets/images/startPositionMarker.svg';
import goalPositionMarker from '../assets/images/goalPositionMarker.svg';
import runningMarker from '../assets/images/runningMarker.svg';
import MoveableMarker from './MoveableMarker';
import DraggableMarker from './DraggableMarker';
import Distance from './Distance';
import { StateContext } from '../provider/StateProvider';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {
  Link
} from "react-router-dom";
import Alert from './Alert';


const startIcon = new Icon({
    iconUrl: startPositionMarker,
    iconSize: [40, 40]
});

const goalIcon = new Icon({
  iconUrl: goalPositionMarker,
  iconSize: [40, 40]
});

const Map = () => {
    const {startCoords,
      setStartCoords,
      setGoalCoords,
      goalCoords,
      yourCoords,
      initObjects,
      setInitObjects,
      simulationObjects,
      setSimulationObjects,
      loading,
      setLoading,
      alertUI,
      setAlertUI,
      distance,
      setDistance,
      startLocation,
      setStartLocation,
      goalLocation,
      setGoalLocation,} = useContext(StateContext);
    const simulationData = async (objects, distance) => {
      const data = await fetch("http://127.0.0.1:8000/start-simulation", {
          method: "POST",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              models : objects,
              distance: distance.distance,
              
          })
      });
      const format_data = await data.json();
  }

    const startSimulation = async () => {
        await setLoading(true);
        const data = await fetch("http://127.0.0.1:8000/start-simulation", {
          method: "POST",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              models : simulationObjects,
              distance: distance.distance,
              
          })
      });
        const format_data = await data.json();
        await setInitObjects(true);
        const newCoords = format_data.simulated_objects.map(object => { 
          return {...object, lat: startCoords.lat, lng:startCoords.lng}
        });
        const newDuration = newCoords.map(object => { 
          return {...object, duration: format_data.simulated_durations[object.id]}
        });
        await setSimulationObjects(newDuration);
        setTimeout(() => {
            const newCoords = newDuration.map(object => { 
              return {...object, lat: goalCoords.lat, lng:goalCoords.lng}
            });
            setSimulationObjects(newCoords);
          }, 3000);
        await setLoading(false);
    }
    return (
        <>
            <div className="w-full h-full relative mx-auto z-10">
              { alertUI.show && <Alert />}
              {yourCoords && <MapContainer center={[yourCoords.lat, yourCoords.lng]} zoom={13} className="w-full h-full z-20" scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <DraggableMarker icon={startIcon} setCoords={setStartCoords} yourCoords={yourCoords} initObjects={initObjects} propertyCoords={startCoords} startCoords={startCoords} goalCoords={goalCoords} location={startLocation} setLocation={setStartLocation} />
                    <DraggableMarker icon={goalIcon} setCoords={setGoalCoords} yourCoords={yourCoords} initObjects={initObjects} propertyCoords={goalCoords} startCoords={startCoords} goalCoords={goalCoords} location={goalLocation} setLocation={setGoalLocation}/>
                    <Polyline key={1} 
                    positions={[
                      [startCoords.lat, startCoords.lng], [goalCoords.lat, goalCoords.lng],
                    ]} color={'#008FFF'} />
                    {initObjects && simulationObjects.map(objects => (
                      <MoveableMarker simulationObject={objects} />
                    ))}
                </MapContainer>}
                <motion.div className="absolute right-0 top-0 z-50 bg-white">
                  <motion.ul>
                    <Link to="/"><motion.li><motion.button>Back to Home</motion.button></motion.li></Link>
                    <Link to="/input"><motion.li><motion.button>Back to Form</motion.button></motion.li></Link>
                    <motion.li><motion.button onClick={() => {setLoading(!loading)}}>Subjects</motion.button></motion.li>
                    <motion.li><motion.button onClick={startSimulation}>Start Simulation</motion.button></motion.li>
                    <motion.li><motion.span>Current Distance: {distance.distance.toFixed(1)} km</motion.span></motion.li>
                  </motion.ul>
                </motion.div>
            </div>
        </>
    )
}

export default Map;