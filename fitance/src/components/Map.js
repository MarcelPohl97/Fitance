import React, {useState, useCallback, useMemo, useRef, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import Button from '../components/Button';
import { Icon } from "leaflet";
import startPositionMarker from '../assets/images/startPositionMarker.svg';
import goalPositionMarker from '../assets/images/goalPositionMarker.svg';

const startIcon = new Icon({
    iconUrl: startPositionMarker,
    iconSize: [40, 40]
  });

const goalIcon = new Icon({
  iconUrl: goalPositionMarker,
  iconSize: [40, 40]
});

const center = {
    lat: 52,
    lng: 52,
}

const DraggableMarker = ({icon, setCoords, yourCoords}) => {
    const [position, setPosition] = useState(yourCoords);
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            setCoords(
              {
                lat:marker.getLatLng().lat,
                lng:marker.getLatLng().lng,
              }
            )
          }
        },
      }),
      [],
    )
  
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={icon}>
        <Popup minWidth={90}>
          {markerRef.current && <div className="flex flex-col items-start">
            <span>
              latitude: { markerRef.current.getLatLng().lat }
            </span>
            <span> longitude: { markerRef.current.getLatLng().lng }</span>
          </div>
          }
        </Popup>
      </Marker>
    )
  }

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
      console.log(yourCoords)
    })
    return (
        <>
            <div className="w-full h-full">
              {yourCoords && <MapContainer center={[yourCoords.lat, yourCoords.lng]} zoom={13} className="w-full h-96" scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <DraggableMarker icon={startIcon} setCoords={setStartCoords} yourCoords={yourCoords}/>
                    <DraggableMarker icon={goalIcon} setCoords={setGoalCoords} yourCoords={yourCoords}/>
                    {startCoords && goalCoords &&
                      <Polyline key={1} positions={[[startCoords.lat, startCoords.lng], [goalCoords.lat, goalCoords.lng],]} color={'red'} /> 
                    }
                </MapContainer>}
                
                <Button primary={true} title={'Submit your Locations'} />
            </div>
        </>
    )
}

export default Map;