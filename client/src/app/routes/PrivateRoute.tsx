import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { IReducer } from '../interfaces/Reducer';

import { selector } from '../helper/selector';
import { dangerMessage } from '../helper/message';

const PrivateRoute = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    useEffect(() => {
        if (!user.isLoggedIn) {
            dangerMessage("Sign in to take part")
        }
    }, [])

    return (
        <>
            {
                user.isLoggedIn ? <Outlet /> : <Navigate to="/" />
            }
        </>
    )
}

export default PrivateRoute