import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/general/Navigation";
import ExploreUsers from "../components/users/ExploreUsers";

import { userAll } from "../server/actions/user.actions";
import { usersApi } from "../server/api/user.api";

import { IReducer } from '../interfaces/Reducer';
import { PageTypeKey } from "../types/key.types";

import { selector } from "../helper/selector";

const Users = () => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [page, setPage] = useState<number>(1)
    const [usersLength, setUsersLength] = useState<number>(0)

    const handlePage = (pageType: PageTypeKey) => {
        if (page === 1 && pageType === 'BACK') return

        if(pageType === 'NEXT' && page >= usersLength) return

        if (pageType === 'BACK') {
            setPage(page - 1)
            return
        }

        setPage(page + 1)
    }

    const defineUsersLength = async () => {

        try {
            const { data } = await usersApi((page - 1)*30, user.isLoggedIn ? user.user.token! : undefined)
            setUsersLength(Math.ceil(data.length / 30))
        } catch (error) {
            console.log(error);
        }
    }

    const getData = async () => {
        dispatch(userAll({
            page: (page - 1)*30,
            token: user.isLoggedIn ? user.user.token! : undefined
        }) as any)
    }

    useEffect(() => {
        getData()
        defineUsersLength()
    }, [page])

    return (
        <Box position='relative' display='flex' justifyContent='flex-end' alignItems='center'>
            <Navigation isCategories={false} isUsers={true} isSurveys={false} navigate={navigate} />
            <ExploreUsers users={user.users} handlePage={handlePage} page={page} navigate={navigate} usersLength={usersLength} />
        </Box>
    )
}

export default Users