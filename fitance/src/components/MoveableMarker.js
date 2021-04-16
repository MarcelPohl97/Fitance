import React, {useState, useRef, useEffect} from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { Icon } from "leaflet";
import runningMarker from '../assets/images/runningMarker.svg';
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";

const RunningIcon = new Icon({
    iconUrl: runningMarker,
    iconSize: [30, 30]
  });

  const MoveableMarker = ({simulationObject}) => {

    return (
      <>
        <ReactLeafletDriftMarker
          // if position changes, marker will drift its way to new position
          position={{lat:simulationObject.lat, lng:simulationObject.lng}}
          // time in ms that marker will take to reach its destination
          duration={simulationObject.duration}
          icon={RunningIcon} >
          <Popup>
            <div className="">
              <span>Info about Person</span>
            </div>
          </Popup>
        </ReactLeafletDriftMarker>
      </>
    )
}

export default MoveableMarker;
  