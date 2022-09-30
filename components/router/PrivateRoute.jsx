import {Navigate, Outlet} from 'react-router-dom';
import {LOGIN} from '../../routes/path';
import {useAuthContext} from '../../context/authContext';


export default function PrivateRoute() {
    const {isAuthenticated} = useAuthContext();
    if(isAuthenticated === false){
        return <Navigate to={LOGIN}/>;
    }

    return (
        <div>
            <Outlet/>
        </div>
    )
}