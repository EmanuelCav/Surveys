import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { IReducer } from '../interfaces/Reducer';

import { selector } from '../helper/selector';

const PrivateRoute = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    return (
        <>
            {
                user.isLoggedIn ? <Outlet /> : <Navigate to="/auth" />
            }
        </>
    )
}

export default PrivateRoute