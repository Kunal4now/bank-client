import {useLocation, Navigate, Outlet} from 'react-router-dom';
import {useContext} from 'react';
import UserContext from '../context/user/UserContext';

const requireAuth = () => {
    const context = useContext(UserContext);
    const location = useLocation();

    return (
        context.user.role !== null ? <Outlet /> : <Navigate to="/" state={{from: location}} replace />
    )
}

export default requireAuth;