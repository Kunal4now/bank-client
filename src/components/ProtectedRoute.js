import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = ({auth}) => {
    return (auth === true) ? <Outlet /> : <Navigate to="/" replace/>;
}

export default ProtectedRoute;