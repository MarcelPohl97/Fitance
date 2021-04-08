import React, {useState, useRef, useEffect} from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet'
import { Icon } from "leaflet";
import runningMarker from '../assets/images/runningMarker.svg';
import ReactLeafletDriftMarker from "react-leaflet-drift-marker"

const RunningIcon = new Icon({
    iconUrl: runningMarker,
    iconSize: [30, 30]
  });
  
  const MoveableMarker = ({startCoords, goalCoords}) => {
    const [initMoving, setInitMoving] = useState(true);
    const [moveCoords, setMoveCoords] = useState(startCoords);
    
      return (
        <>
        {initMoving && 
          <ReactLeafletDriftMarker
            // if position changes, marker will drift its way to new position
            position={moveCoords}
            // time in ms that marker will take to reach its destination
            duration={0}
            icon={RunningIcon} >
            <Popup>Current Heartrate:</Popup>
          </ReactLeafletDriftMarker>
        }
        </>
      )
}

export default MoveableMarker;
  