import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SupportScreen from '../screens/SupportScreen';
import HowScreen from '../screens/HowScreen';
import AboutScreen from '../screens/AboutScreen';
import InputScreen from '../screens/InputScreen';
import MapScreen from '../screens/MapScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const AppRoutes = () => {
    return (
        <>
        <Route exact path="/">
            <HomeScreen /> 
        </Route>
        <Route exact path="/support">
            <SupportScreen /> 
        </Route>
        <Route exact path="/how">
            <HowScreen /> 
        </Route>
        <Route exact path="/about">
            <AboutScreen /> 
        </Route>
        <Route excact path="/input">
            <InputScreen />
        </Route>
        <Route excact path="/map">
            <MapScreen />
        </Route>
        </>
    )
}

export default AppRoutes;