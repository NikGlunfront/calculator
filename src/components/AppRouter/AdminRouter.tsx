import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from '../../pages/admin/AdminPage';
import Login from '../../pages/admin/Login';
import { AdminRouteNames } from '../../router';

const AdminRouter = () => {
    return (
        <Routes>
            <Route 
                path={AdminRouteNames.ADMINPAGE}
                key={AdminRouteNames.ADMINPAGE}
                element={<AdminPage />}
            />
            <Route
                path="*"
                element={<Navigate to={AdminRouteNames.ADMINPAGE} />}
            />
        </Routes>
    );
};

export default AdminRouter;