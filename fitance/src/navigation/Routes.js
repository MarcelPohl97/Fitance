import React from 'react';
import AppRoutes from './AppRoutes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Routes = () => {
    return (
        <>
            <Router>
                <AppRoutes />
            </Router>
        </>
    )
}

export default Routes;