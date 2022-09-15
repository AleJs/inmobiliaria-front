import {Navigate, Outlet} from 'react-router-dom';
import {PRIVATE} from '../../routes/path';
import {useAuthContext} from '../../context/authContext';


export default function PublicRoute() {
    const {isAuthenticated} = useAuthContext();
    console.log(isAuthenticated)
    if(isAuthenticated){
        return <Navigate to={PRIVATE}/>;
    }

    return (
        <div>
            <Outlet/>
        </div>
    )
}