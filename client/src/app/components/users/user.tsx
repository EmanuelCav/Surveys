import { useNavigate } from "react-router-dom";

import { IUser } from '../../interfaces/User'

const User = ({ user }: { user: IUser }) => {

    const navigate = useNavigate()

    const redirectProfile = () => {
        navigate(`/profile/${user.id}`)
    }

    return (
        <div className='user-users' onClick={redirectProfile}>
            <p className='user-info-profile'>{user.username}</p>
            <p className='text-info-profile'>Followers: {user.followers.length}</p>
        </div>
    )
}

export default User