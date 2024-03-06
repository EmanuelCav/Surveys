import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';

import InfoProfile from "../components/profile/InfoProfile"
import SurveysProfile from "../components/profile/SurveysProfile"

import { IReducer } from '../interfaces/Reducer';

import { selector } from '../helper/selector';

import { userProfile } from '../server/actions/user.actions';

const Profile = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const getData = async () => {
    dispatch(userProfile(params.id!) as any)
  }

  useEffect(() => {
    getData()
  }, [dispatch, params.id])

  return (
    <Box>
      {
        user.profile.id && (
          <>
            <InfoProfile user={user.profile} loggedUser={user.user} navigate={navigate} dispatch={dispatch} />
            <SurveysProfile user={user} navigate={navigate} />
          </>
        )
      }
    </Box>
  )
}

export default Profile