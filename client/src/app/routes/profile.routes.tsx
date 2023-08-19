import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import InfoProfile from "../components/profile/infoProfile"
import SurveysProfile from "../components/profile/surveysProfile"

import { getUserApi } from "../server/api/user.api";
import { getUserAction } from "../server/features/user.features";

import { IReducer } from '../interfaces/Reducer';

const Profile = () => {

  const { user } = useSelector((state: IReducer) => state)

  const dispatch = useDispatch()
  const params = useParams()

  const getData = async () => {

    try {
      const { data } = await getUserApi(params.id as string, user.user.token)
      dispatch(getUserAction(data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [dispatch])


  return (
    <div className="container-profile">
      {
        user.profile._id && (
          <>
            <InfoProfile user={user.profile} loggedUser={user.user.user} />
            <SurveysProfile />
          </>
        )
      }
    </div>
  )
}

export default Profile