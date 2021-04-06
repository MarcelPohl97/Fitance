import React, {useState, useMemo, useRef} from 'react';
import { Marker, Popup, } from 'react-leaflet';
import { useDispatch } from 'react-redux';

const DraggableMarker = ({icon, setCoords, yourCoords}) => {
    const dispatch = useDispatch();
    const [position, setPosition] = useState(yourCoords);
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            const coords = {
              lat:marker.getLatLng().lat,
              lng:marker.getLatLng().lng,
            }
            setPosition(marker.getLatLng())
            dispatch(
              setCoords(coords)
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

export default DraggableMarker;