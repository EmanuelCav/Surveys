import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import InfoProfile from "../components/profile/infoProfile"
import SurveysProfile from "../components/profile/surveysProfile"

import { surveysProfileApi } from "../server/api/surveys.api";
import { surveysAction } from "../server/features/surveys.features";

import { IReducer } from '../interfaces/Reducer';

import { selector } from '../helper/selector';
import { userProfile } from '../server/actions/user.actions';

const Profile = () => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const surveys = useSelector((state: IReducer) => selector(state).surveys)

  const dispatch = useDispatch()
  const params = useParams()

  const getSurveys = async () => {

    try {

      const { data } = await surveysProfileApi(params.id as string, user.user.token)

      dispatch(surveysAction(data))

    } catch (error) {
      console.log(error);
    }
  }

  const getData = async () => {
    dispatch(userProfile({
      id: String(params.id),
      token: user.user.token
    }) as any)
  }

  useEffect(() => {
    getSurveys()
    getData()
  }, [dispatch, params.id])

  return (
    <div className="container-profile">
      {
        user.profile._id && (
          <>
            <InfoProfile user={user.profile} loggedUser={user.user} surveys={surveys.surveys} />
            <SurveysProfile surveys={surveys.surveys} user={user} />
          </>
        )
      }
    </div>
  )
}

export default Profile