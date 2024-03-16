import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/general/Navigation";
import ExploreUsers from "../components/users/ExploreUsers";

import { userAll } from "../server/actions/user.actions";

import { IReducer } from '../interfaces/Reducer';

import { selector } from "../helper/selector";

const Users = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getData = async () => {
        dispatch(userAll(user.user.token) as any)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box position='relative' display='flex' justifyContent='flex-end' alignItems='center'>
            <Navigation isCategories={false} isUsers={true} isSurveys={false} navigate={navigate} />
            <ExploreUsers users={user.users} />
        </Box>
    )
}

export default Users