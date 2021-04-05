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


const startIcon = new Icon({
    iconUrl: startPositionMarker,
    iconSize: [40, 40]
});

const goalIcon = new Icon({
  iconUrl: goalPositionMarker,
  iconSize: [40, 40]
});

const Map = () => {
    const [startCoords, setStartCoords] = useState();
    const [goalCoords, setGoalCoords] = useState();
    const [yourCoords, setYourCoords] = useState();

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setYourCoords({
          lat:position.coords.latitude,
          lng:position.coords.longitude,
        })
      });
    })
    return (
        <>
            <div className="w-full h-full relative">
              {yourCoords && <MapContainer center={[yourCoords.lat, yourCoords.lng]} zoom={13} className="w-full h-96 z-20" scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MoveableMarker startCoords={startCoords} goalCoords={goalCoords} />
                    <DraggableMarker icon={startIcon} setCoords={setStartCoords} yourCoords={yourCoords}/>
                    <DraggableMarker icon={goalIcon} setCoords={setGoalCoords} yourCoords={yourCoords}/>
                    {startCoords && goalCoords &&
                      <Polyline key={1} positions={[[startCoords.lat, startCoords.lng], [goalCoords.lat, goalCoords.lng],]} color={'red'} /> 
                    }
                </MapContainer>}
            </div>
        </>
    )
}

export default Map;