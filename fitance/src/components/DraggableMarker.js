import React, {useState, useMemo, useRef, useEffect, useContext} from 'react';
import { Marker, Popup, } from 'react-leaflet';
import { StateContext } from '../provider/StateProvider';

const DraggableMarker = ({icon, setCoords, yourCoords, initObjects, propertyCoords, goalCoords, startCoords, location, setLocation }) => {
    const { setAlertUI, setDistance, } = useContext(StateContext);
    const [position, setPosition] = useState(yourCoords);
    const markerRef = useRef(null)
    const distanceCoords = {
      start_lat:startCoords.lat,
      start_lng:startCoords.lng,
      goal_lat:goalCoords.lat,
      goal_lng:goalCoords.lng,
    }
    const getLocation = async (lat, lng) => {
      await fetch("http://127.0.0.1:8000/get-location", {
          method: "POST",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              'lat' : lat,
              'lng': lng,
          })
      })
      .then(data => data.json())
      .then((data) => {
          setLocation(data);
      },
      (error)=>{
          setLocation({location:'We couldnt get your Location'});
          setAlertUI(
            {
                show:true,
                title:'Error', 
                caption:'We couldn´t get your Location try again!', 
                color:'text-red-600',
                status:'wavy-error-text',
            }
        );
      })
  }

    const getDistance = async (start_lat, start_lng, goal_lat, goal_lng) => {
      await fetch("http://127.0.0.1:8000/get-distance", {
          method: "POST",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            'start_lat': start_lat,
            'start_lng': start_lng,
            'goal_lat': goal_lat,
            'goal_lng': goal_lng
          })
      })
      .then(data => data.json())
      .then((data) => {
          setDistance(data);
      },
      (error)=>{
          setDistance({distance:'You are missing one Waypoint or we couldnt get your Distance'});
          setAlertUI(
            {
                show:true,
                title:'Error', 
                caption:'We couldn´t get your Distance try again!', 
                color:'text-red-600',
                status:'wavy-error-text',
            }
        );
      })
    }
    const eventHandlers = useMemo(
      () => ({
       async dragend() {
          const marker = await markerRef.current
          if (marker != null) {
            const coords = {
              lat:marker.getLatLng().lat,
              lng:marker.getLatLng().lng,
            }
            setPosition(marker.getLatLng())
            await getLocation(coords.lat, coords.lng);
            await setCoords(coords);
          }
        },
      }),
      [],
    )
    useEffect(() => {
      if(initObjects === true) {setPosition(propertyCoords)}
    })

    useEffect(() => {
      getDistance(distanceCoords.start_lat, distanceCoords.start_lng, distanceCoords.goal_lat, distanceCoords.goal_lng);
    }, [startCoords, goalCoords])

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
            <span>Location: {location.location}</span>
          </div>
          }
        </Popup>
      </Marker>
    )
}

export default DraggableMarker;