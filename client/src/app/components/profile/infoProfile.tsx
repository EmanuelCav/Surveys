import { useState, useEffect } from 'react'

import FollowInfo from './components/infoProfile/FollowInfo';

import { InfoProfilePropsType } from '../../types/props.types';

import { followApi } from "../../server/api/user.api";
import { getUserAction } from "../../server/features/user.features";
import { userLogout } from '../../server/actions/user.actions';

import { Box, Button, Typography } from '@mui/material';

const InfoProfile = ({ user, loggedUser, dispatch, navigate }: InfoProfilePropsType) => {

    const [isFollowing, setIsFollowing] = useState<boolean>(false)

    const logOut = () => {
        dispatch(userLogout(navigate) as any)
    }

    const follow = async () => {

        try {
            const { data } = await followApi(user.id, loggedUser.token)
            dispatch(getUserAction(data))
            setIsFollowing(!isFollowing)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        user.followers.find((u) => {
            if (u.id === loggedUser.user.id) {
                setIsFollowing(true)
            }
        })
    }, [dispatch, user.followers])

    return (
        <Box>
            <Typography variant='h3' color='#f76'>
                {user.username}
            </Typography>
            <FollowInfo user={user} />
            {
                user.id === loggedUser.user.id ? (
                    <Button color='warning' variant='contained' sx={{ mt: 2 }} onClick={logOut}>Edit Profile</Button>
                ) : (
                    isFollowing ? (
                        <Button color='warning' variant='contained' sx={{ mt: 2 }} onClick={follow}>Following</Button>
                    ) : (
                        <Button color='warning' variant='contained' sx={{ mt: 2 }} onClick={follow}>Follow</Button>
                    )
                )
            }
        </Box>
    )
}

export default InfoProfile