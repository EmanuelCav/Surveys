import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import User from "../components/users/user";

import { userAll } from "../server/actions/user.actions";

import { IReducer } from "../interfaces/Reducer";
import { IUser } from "../interfaces/User";

import { selector } from "../helper/selector";

const Users = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const dispatch = useDispatch()

    const getData = async () => {
        dispatch(userAll(user.user.token) as any)
    }

    useEffect(() => {
        getData()
    }, [dispatch])


    return (
        <div className="container-users">
            {
                user.users.map((u: IUser) => {
                    return <User user={u} key={u.id} />
                })
            }
        </div>
    )
}

export default Users