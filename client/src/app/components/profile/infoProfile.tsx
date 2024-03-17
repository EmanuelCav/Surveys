import { useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material';

import FollowInfo from './components/infoProfile/FollowInfo';
import Username from './components/infoProfile/Username';

import { InfoProfilePropsType } from '../../types/props.types';

import { followApi } from "../../server/api/user.api";
import { getUserAction } from "../../server/features/user.features";

const InfoProfile = ({ user, loggedUser, dispatch, navigate, handleEditProfile }: InfoProfilePropsType) => {

    const [isFollowing, setIsFollowing] = useState<boolean>(false)

    const handleFollow = async () => {

        try {
            const { data } = await followApi(user.id, loggedUser.token)
            dispatch(getUserAction(data))
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
    }, [dispatch, user.followers, isFollowing])

    return (
        <Box px={4}>
            <Username user={user} loggedUser={loggedUser} dispatch={dispatch} navigate={navigate} />
            <Typography variant='h6' mt={1}>
                {user.description}
            </Typography>
            <FollowInfo user={user} />
            {
                user.id === loggedUser.user.id ? (
                    <Button color='warning' variant='contained' sx={{ mt: 2 }} onClick={handleEditProfile}>Edit Profile</Button>
                ) : (
                    isFollowing ? (
                        <Button color='warning' variant='contained' sx={{ mt: 2 }} onClick={handleFollow}>Following</Button>
                    ) : (
                        <Button color='warning' variant='contained' sx={{ mt: 2 }} onClick={handleFollow}>Follow</Button>
                    )
                )
            }
        </Box>
    )
}

export default InfoProfile