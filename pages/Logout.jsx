import {useEffect} from 'react';
import {useAuthContext} from '../context/authContext';

function Logout() {
    const {LogoutContext} = useAuthContext();
    useEffect(()=> LogoutContext());
    return null;
}

export default Logout;