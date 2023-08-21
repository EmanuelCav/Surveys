import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import User from "../components/users/user";

import { usersApi } from '../server/api/user.api'
import { usersAction } from '../server/features/user.features'

import { IReducer } from "../interfaces/Reducer";
import { IUser } from "../interfaces/User";

import { selector } from "../helper/selector";

const Users = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const dispatch = useDispatch()

    const getData = async () => {

        try {
            const { data } = await usersApi(user.user.token)
            dispatch(usersAction(data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [dispatch])


    return (
        <div className="container-users">
            {
                user.users.map((us: IUser) => {
                    return <User user={us} key={us._id} />
                })
            }
        </div>
    )
}

export default Users