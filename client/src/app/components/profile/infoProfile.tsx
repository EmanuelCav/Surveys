import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

import FollowInfo from './components/infoProfile/FollowInfo';
import Username from './components/infoProfile/Username';

import { InfoProfilePropsType } from '../../types/props.types';

import { followApi } from "../../server/api/user.api";
import { getUserAction, userAction } from "../../server/features/user.features";

const InfoProfile = ({ user, loggedUser, dispatch, navigate, handleEditProfile }: InfoProfilePropsType) => {

    const [isFollowing, setIsFollowing] = useState<boolean>(false);

    const handleFollow = async () => {
        try {
            const { data } = await followApi(user.id!, loggedUser.token!);
            dispatch(getUserAction(data.user));
            dispatch(userAction(data.userLoggedIn));
            setIsFollowing(!isFollowing);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const isUserFollowing = user.followers?.some((u) => u.followingId === loggedUser.user?.id);
        setIsFollowing(!!isUserFollowing);
    }, [user.followers, loggedUser.user?.id]);

    return (
        <Box px={{ xs: 2, sm: 4, display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column' }}>
            <Username user={user} loggedUser={loggedUser} dispatch={dispatch} navigate={navigate} />
            <Typography variant="h6" mt={1} sx={{ wordBreak: 'break-word' }}>
                {user.description}
            </Typography>
            <FollowInfo user={user} />
            {
                user.id === loggedUser.user?.id ? (
                    <Button color="warning" variant="contained" sx={{ mt: 2 }} onClick={handleEditProfile}>
                        Edit Profile
                    </Button>
                ) : (
                    <Button
                        color="warning"
                        variant={isFollowing ? "outlined" : "contained"}
                        sx={{ mt: 2 }}
                        onClick={handleFollow}
                    >
                        {isFollowing ? "Following" : "Follow"}
                    </Button>
                )
            }
        </Box>
    );
};

export default InfoProfile;