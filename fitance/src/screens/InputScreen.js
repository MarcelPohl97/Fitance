import React, {useState, useEffect} from 'react';
import LayoutContainer from '../components/LayoutContainer';
import Navigation from '../components/Navigation';
import HighlightInfo from '../components/HiglightInfo';
import ScreenTitle from '../components/ScreenTitle';
import ScreenCaption from '../components/ScreenCaption';
import ActionContainer from '../components/ActionContainer';
import Button from '../components/Button';
import {
    Link
  } from "react-router-dom";
import Map from '../components/Map';
import InputForm from '../components/InputForm';
import Distance from '../components/Distance';
import { useSelector, useDispatch } from 'react-redux';
import WavyText from '../components/WavyText';

import {
    toggleInputUI, selectUIValues
  } from '../redux/features/ui/uiSlice';
  import {
    setYourCoords
  } from '../redux/features/coordinates/yourSlice';

const InputScreen = () => {
    const inputUI = useSelector(selectUIValues);
    const dispatch = useDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            dispatch(setYourCoords(coords));
          });
    })
    return (
        <>
            <LayoutContainer>
                <Navigation />
                <div className="flex flex-col items-center">
                    <ScreenTitle title={'Your Body Level'} />
                    <ScreenCaption>
                        Input your <WavyText text={'Data'} /> and calculate your <WavyText text={'Goal'} />
                    </ScreenCaption>
                    <ActionContainer>
                        {inputUI ?  <Map /> : <InputForm />}
                    </ActionContainer>
                    {inputUI ? 
                        <div className="shadow-xl rounded-lg bg-white mt-10" style={{border:'2px solid #F06C88',}}>
                            <Distance distance={'12km'}/>
                            <Button primary={true} title={'Start Simulation'} />
                        </div> 
                    : ''}
                    <div className="flex flex-row items-center space-x-4">
                        <Link to="/">
                                <Button primary={true} title={'Back to Landing'} />
                        </Link>
                        {inputUI ? <Button primary={true} title={'Back to Form'} onClick={() => {dispatch(toggleInputUI())}} /> : ''}
                    </div>
                </div>
            </LayoutContainer>
        </>
    )
}

export default InputScreen;