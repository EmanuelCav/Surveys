import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import InfoProfile from "../components/profile/InfoProfile"
import SurveysProfile from "../components/profile/SurveysProfile"
import EditProfile from '../components/profile/EditProfile';

import { IReducer } from '../interfaces/Reducer';

import { selector } from '../helper/selector';

import { userProfile } from '../server/actions/user.actions';

const Profile = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const [isEditProfile, setIsEditProfile] = useState<boolean>(false)

  const getData = async () => {
    dispatch(userProfile({
      id: Number(params.id!),
      token: user.user.token!
    }) as any)
  }

  const handleEditProfile = () => {
    setIsEditProfile(!isEditProfile)
  }

  useEffect(() => {
    if (params.id) {
      getData();
    }
  }, [params.id])
  

  return (
    <Box sx={{ mt: 10 }}>
      {
        isEditProfile && <EditProfile navigate={navigate} dispatch={dispatch} handleEditProfile={handleEditProfile} user={user} setIsEditProfile={setIsEditProfile} />
      }
      {
        user.profile.id && (
          <Box pt={2}>
            <InfoProfile user={user.profile} loggedUser={user.user} navigate={navigate} dispatch={dispatch} handleEditProfile={handleEditProfile} />
            <SurveysProfile user={user} navigate={navigate} />
          </Box>
        )
      }
    </Box>
  )
}

export default Profile