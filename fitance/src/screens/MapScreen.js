import React, {useEffect, useContext} from 'react';
import { StateContext } from '../provider/StateProvider';
import Map from '../components/Map';
import Loader from '../components/Loader';

const MapScreen = () => {
    const {loading} = useContext(StateContext);
    return (
        <>
            <div className="w-screen h-screen">
                {loading ? <Loader /> : <Map /> }
            </div>
        </>
    )
}

export default MapScreen;