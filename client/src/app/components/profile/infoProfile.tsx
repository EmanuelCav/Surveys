import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutAction } from "../../server/features/user.features";

import { profileType } from "../../types/auth.types"

const InfoProfile = ({ user, loggedUser, surveys }: profileType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(logoutAction())
        navigate('/auth')
    }

    return (
        <div className='container-info-profile'>
            <h1 className="user-info-profile">{user.username}</h1>
            <p className="text-info-profile">Followers: {user.followers.length}</p>
            <p className="text-info-profile">Following: {user.following.length}</p>
            <p className="text-info-profile">Surveys: {surveys.length}</p>
            {
                user._id === loggedUser._id ? (
                    <button className="button-profile" onClick={logOut}>Log out</button>
                ) : (
                    <button className="button-profile">Follow</button>
                )
            }
        </div>
    )
}

export default InfoProfile