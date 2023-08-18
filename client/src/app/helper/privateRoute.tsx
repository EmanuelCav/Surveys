import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { IReducer } from '../interfaces/Reducer';

const PrivateRoute = () => {

    const { user } = useSelector((state: IReducer) => state)

    return (
        <>
            {
                user.isLoggedIn ? <Outlet /> : <Navigate to="/auth" />
            }
        </>
    )
}

export default PrivateRoute