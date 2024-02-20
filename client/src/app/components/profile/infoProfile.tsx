import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { followApi } from "../../server/api/user.api";
import { getUserAction } from "../../server/features/user.features";

import { profileType } from "../../types/auth.types"
import { userLogout } from '../../server/actions/user.actions';

const InfoProfile = ({ user, loggedUser, surveys }: profileType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isFollowing, setIsFollowing] = useState<boolean>(false)

    const logOut = () => {
        dispatch(userLogout(navigate) as any)
    }

    const follow = async () => {

        try {
            const { data } = await followApi(user._id, loggedUser.token)
            dispatch(getUserAction(data))
            setIsFollowing(!isFollowing)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        user.followers.find((userId) => {
            if (userId === loggedUser.user._id) {
                setIsFollowing(true)
            }
        })
    }, [dispatch, user.followers])

    return (
        <div className='container-info-profile'>
            <h1 className="user-info-profile">{user.username}</h1>
            <p className="text-info-profile">Followers: {user.followers.length}</p>
            <p className="text-info-profile">Following: {user.following.length}</p>
            <p className="text-info-profile">Surveys: {surveys.length}</p>
            {
                user._id === loggedUser.user._id ? (
                    <button className="button-profile" onClick={logOut}>Log out</button>
                ) : (
                    isFollowing ? (
                        <button className="button-follow" onClick={follow}>Following</button>
                    ) : (
                        <button className="button-profile" onClick={follow}>Follow</button>
                    )
                )
            }
        </div>
    )
}

export default InfoProfile