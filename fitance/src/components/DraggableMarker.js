import React, {useState, useMemo, useRef} from 'react';
import { Marker, Popup, } from 'react-leaflet'

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

export default DraggableMarker;