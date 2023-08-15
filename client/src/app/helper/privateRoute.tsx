import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { IReducerUser } from '../interfaces/Reducer';

const PrivateRoute = () => {

    const { isLoggedIn } = useSelector((state: IReducerUser) => state)

    return (
        <>
            {
                isLoggedIn ? <Outlet /> : <Navigate to="/auth" />
            }
        </>
    )
}

export default PrivateRoute