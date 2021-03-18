import React, {useState, useRef, useEffect} from 'react';
import { Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import runningMarker from '../assets/images/runningMarker.svg';

const RunningIcon = new Icon({
    iconUrl: runningMarker,
    iconSize: [40, 40]
  });
  
  const MoveableMarker = ({startCoords, goalCoords}) => {
    const [initMoving, setInitMoving] = useState(false);
    const [latAcceleration, setLatAcceleration] = useState(0.001);
    const [lngAcceleration, setLngAcceleration] = useState(0.001);
    const [moveCoords, setMoveCoords] = useState(
        {
          lat:10,
          lng:10,
        }
      )
    const markerRef = useRef(null);
    const MoveLng = () => {
      if(parseFloat(moveCoords.lng.toFixed(3)) !== parseFloat(goalCoords.lng.toFixed(3))) {
        if(moveCoords.lng > goalCoords.lng) {
          setMoveCoords({...moveCoords, lng: moveCoords.lng - lngAcceleration})
        }else {
          setMoveCoords({...moveCoords, lng: moveCoords.lng + lngAcceleration})
        }
      }
    }
  
    const MoveLat = () => {
      if(parseFloat(moveCoords.lat.toFixed(3)) !== parseFloat(goalCoords.lat.toFixed(3))) {
        if(moveCoords.lat > goalCoords.lat) {
          setMoveCoords({...moveCoords, lat: moveCoords.lat - latAcceleration})
        }else {
          setMoveCoords({...moveCoords, lat: moveCoords.lat + lngAcceleration})
        }
      }
    }
  
    const moveLatLng = () => {
      MoveLng();
      MoveLat();
    }
  
      const moveMarker = () => {
        moveLatLng();
      }
  
      useEffect(() => {
        const interval = setInterval(() => {
          if(initMoving === true) {
            moveMarker();
          }
        }, 16);
        return () => clearInterval(interval);
      })
      return (
        <>
          <Marker
            position={moveCoords}
            ref={markerRef}
            eventHandlers={{
              click: async () => {
                await setMoveCoords({lat:startCoords.lat, lng:startCoords.lng});
                await setInitMoving(true);
              },
            }}
            icon={RunningIcon}>
              <Popup minWidth={90}>
                <div className="flex flex-col items-start">
                  <span>Current Status of Person:</span>
                  <span>Heartrate: </span>
                </div>
              </Popup>
          </Marker> 
        </>
      )
}

export default MoveableMarker;
  