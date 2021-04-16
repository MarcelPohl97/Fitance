import React, { useState } from 'react';

const StateContext = React.createContext();

const StateProvider = (props) => {
    const [goalCoords, setGoalCoords] = useState(
        {
            lat:10,
            lng:10,
        }
    )

    const [startCoords, setStartCoords] = useState(
        {
            lat:10,
            lng:10,
        }
    )

    const [yourCoords, setYourCoords] = useState(
        {
            lat:0,
            lng:0,
        }
    )

    const [alertUI, setAlertUI] = useState({
        show:false,
        title:'',
        caption:'',
        color:'',
        status:'',
    })

    const [inputUI, setInputUI] = useState(false);

    const [vital, setVital] = useState(
        {
            age:null,
            height:null,
        }
    )

    const [distance, setDistance] = useState({distance:0});

    const [startLocation, setStartLocation] = useState({location:'Location'});

    const [goalLocation, setGoalLocation] = useState({location: 'Location'});

    const [initObjects, setInitObjects] = useState(false);

    const [loading, setLoading] = useState(false);

    const [simulationObjects, setSimulationObjects] = useState(
        [
            
        ]
        );

  return (
    <StateContext.Provider
      value={{
          goalCoords,
          setGoalCoords,
          startCoords,
          setStartCoords,
          yourCoords,
          setYourCoords,
          inputUI,
          setInputUI,
          vital,
          setVital,
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
          setGoalLocation
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider};