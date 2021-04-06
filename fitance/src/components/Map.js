import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Polyline, } from 'react-leaflet'
import Button from '../components/Button';
import { Icon } from "leaflet";
import startPositionMarker from '../assets/images/startPositionMarker.svg';
import goalPositionMarker from '../assets/images/goalPositionMarker.svg';
import runningMarker from '../assets/images/runningMarker.svg';
import MoveableMarker from './MoveableMarker';
import DraggableMarker from './DraggableMarker';
import Distance from './Distance';
import { useSelector, useDispatch } from 'react-redux'

import {
    setYourCoords, selectYourCoords
  } from '../redux/features/coordinates/yourSlice';

import {
  selectGoalCoords,
  setGoalCoords
} from '../redux/features/coordinates/goalSlice';

import {
  selectStartCoords,
  setStartCoords
} from '../redux/features/coordinates/startSlice';

const startIcon = new Icon({
    iconUrl: startPositionMarker,
    iconSize: [40, 40]
});

const goalIcon = new Icon({
  iconUrl: goalPositionMarker,
  iconSize: [40, 40]
});

const Map = () => {
    const dispatch = useDispatch();
    const yourCoords = useSelector(selectYourCoords);
    const startCoords = useSelector(selectStartCoords);
    const goalCoords = useSelector(selectGoalCoords);
    return (
        <>
            <div className="w-full h-full relative">
              {yourCoords && <MapContainer center={[yourCoords.lat, yourCoords.lng]} zoom={13} className="w-full h-96 z-20" scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <DraggableMarker icon={startIcon} setCoords={setStartCoords} yourCoords={yourCoords}/>
                    <DraggableMarker icon={goalIcon} setCoords={setGoalCoords} yourCoords={yourCoords}/>
                    <MoveableMarker startCoords={startCoords} goalCoords={goalCoords} />
                    
                    {startCoords && goalCoords &&
                      <Polyline key={1} positions={[[startCoords.lat, startCoords.lng], [goalCoords.lat, goalCoords.lng],]} color={'red'} /> 
                    }
                </MapContainer>}
            </div>
        </>
    )
}

export default Map;