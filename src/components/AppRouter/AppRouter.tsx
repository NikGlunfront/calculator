import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Charm from '../../pages/Charm';
import Home from '../../pages/Home';
import Intimacy from '../../pages/Intimacy';
import Talents from '../../pages/Talents';
import { RouteNames } from '../../router';

const AppRouter: FC = () => {
    return (
        <Routes>    
            <Route 
                path={RouteNames.HOME}
                key={RouteNames.HOME}
                element={<Home />}
            />
            <Route 
                path={RouteNames.CHARM}
                key={RouteNames.CHARM}
                element={<Charm />}
            />
            <Route 
                path={RouteNames.PROXIMITY}
                key={RouteNames.PROXIMITY}
                element={<Intimacy/>}
            />
            <Route 
                path={RouteNames.TALENTS}
                key={RouteNames.TALENTS}
                element={<Talents/>}
            />
            <Route
                path="*"
                element={<Navigate to={RouteNames.HOME} />}
            />
        </Routes>
    );
};

export default AppRouter;