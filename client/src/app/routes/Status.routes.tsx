import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { IReducer } from "../interfaces/Reducer";

import { selector } from "../helper/selector";
import { updateStatus } from "../server/actions/user.actions";

const Status = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const dispatch = useDispatch()

    const [isStatus, setIsStatus] = useState<boolean>(false)

    useEffect(() => {
        if (user.user.user?.id && !user.isLoggedIn) {
            dispatch(updateStatus({
                id: user.user.user?.id,
                setIsStatus
            }) as any)
        }
    }, [dispatch])

    return (
        <>
            {
                isStatus || user.isLoggedIn || !user.user.user?.id && <Navigate to='/' />
            }
        </>
    )
}

export default Status