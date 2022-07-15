import {Navigate, Outlet} from 'react-router-dom';
import UserContext from '../context/user/UserContext';
import {useContext, useEffect} from 'react';
const ProtectedRoute = ({auth}) => {
    const context = useContext(UserContext);
    const {user, getUser} = context;
    useEffect(() => {
      getUser()
    }
    , [])
    return (user.role !== null) ? <Outlet /> : <Navigate to="/" replace/>;
}

export default ProtectedRoute;