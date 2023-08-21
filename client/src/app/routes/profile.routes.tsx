import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import InfoProfile from "../components/profile/infoProfile"
import SurveysProfile from "../components/profile/surveysProfile"

import { surveysProfileApi } from "../server/api/surveys.api";
import { surveysProfileAction } from "../server/features/surveys.features";
import { getUserApi } from "../server/api/user.api";
import { getUserAction } from "../server/features/user.features";

import { IReducer } from '../interfaces/Reducer';

import { selector } from '../helper/selector';

const Profile = () => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const surveys = useSelector((state: IReducer) => selector(state).surveys)

  const dispatch = useDispatch()
  const params = useParams()

  const getSurveys = async () => {

    try {
      const { data } = await surveysProfileApi(params.id as string, user.user.token)
      dispatch(surveysProfileAction(data))
    } catch (error) {
      console.log(error);
    }
  }

  const getData = async () => {

    try {
      const { data } = await getUserApi(params.id as string, user.user.token)
      dispatch(getUserAction(data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSurveys()
    getData()
  }, [dispatch])


  return (
    <div className="container-profile">
      {
        user.profile._id && (
          <>
            <InfoProfile user={user.profile} loggedUser={user.user.user} surveys={surveys.surveys} />
            <SurveysProfile surveys={surveys.surveys} />
          </>
        )
      }
    </div>
  )
}

export default Profile