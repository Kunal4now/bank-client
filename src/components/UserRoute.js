import {Navigate, Outlet} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import UserContext from '../context/user/UserContext';

const UserRoute = () => {
    const context = useContext(UserContext);
    const {user, getUser} = context;
  
    useEffect(() => {
      getUser()
    }
    , [])
    {console.log(user.role)}
    return (user.role === 'user') ? <Outlet /> : <Navigate to="/" replace/>;
}

export default UserRoute;