import React, {useState} from 'react';
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

const InputScreen = () => {
    const [status, setStatus] = useState(true);
    return (
        <>
            <LayoutContainer>
                <Navigation />
                <div className="flex flex-col items-center">
                    <ScreenTitle title={'Your Body Level'} />
                    <ScreenCaption caption1={'Input your'} highlight1={'Data'} caption2={'and calculate your'} highlight2={'Goal'} />
                    <ActionContainer>
                        {status ?  <Map /> : <InputForm />}
                    </ActionContainer>
                    <div className="flex flex-row">
                        <Link to="/">
                            <Button primary={true} title={'Back to Landing'} />
                        </Link>
                    </div>
                </div>
            </LayoutContainer>
        </>
    )
}

export default InputScreen;