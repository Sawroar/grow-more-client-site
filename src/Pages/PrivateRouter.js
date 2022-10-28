import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user } = useContext()
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRouter;