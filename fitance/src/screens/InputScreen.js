import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import Navigation from '../components/Navigation';
import HighlightInfo from '../components/HiglightInfo';
import ScreenTitle from '../components/ScreenTitle';
import ActionContainer from '../components/ActionContainer';

const InputScreen = () => {
    return (
        <>
            <LayoutContainer>
                <Navigation />
                <div className="flex flex-col items-center">
                    <ScreenTitle title={'Your Body Level'} />
                    <h3 className="text-center text-4xl text-white font-bold">Input your <HighlightInfo title={'Status'}/> and calculate your <HighlightInfo title={'Goal'}/>
                     </h3>
                    <ActionContainer>
                        
                    </ActionContainer>
                    <div className="flex flex-row">
                        <button className="p-2 rounded-lg border-2 border-white shadow-xl text-2xl text-white mt-4" style={{background:'#F06C88'}}>Get Started</button>
                        <button className="p-2 rounded-lg border-2 border-white shadow-xl text-2xl text-white mt-4 ml-4 ">How it works</button>
                    </div>
                </div>
            </LayoutContainer>
        </>
    )
}

export default InputScreen;