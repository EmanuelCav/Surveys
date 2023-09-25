import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { removeSurveyApi } from "../../../../server/api/surveys.api";
import { removeSurveyAction } from "../../../../server/features/surveys.features";
import { loadingAction } from "../../../../server/features/response.features";

import { removeSurveyType } from "../../../../types/survey.types";

import { successMessage } from "../../../../helper/message";

const Remove = ({ setIsRemove, survey, user }: removeSurveyType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const removeSurvey = async () => {

        try {

            const { data } = await removeSurveyApi(survey._id, user.token)

            dispatch(loadingAction(true))
            dispatch(removeSurveyAction(survey))

            setTimeout(() => {
                dispatch(loadingAction(false))
            }, 450)

            setIsRemove(false)
            navigate(`/profile/${user.user._id}`)
            successMessage(data.message)

        } catch (error: any) {
            console.log(error);
        }
    }

    const cancelRemove = () => {
        setIsRemove(false)
    }

    return (
        <div className="container-remove">
            <ToastContainer />
            <div className="contain-remove">
                <p className="text-remove">The survey will be removed. Do you wish to continue?</p>
                <div className="container-actions-remove">
                    <p className="text-remove-p" onClick={removeSurvey}>Remove</p>
                    <p className="text-remove-p" onClick={cancelRemove}>Cancel</p>
                </div>
            </div>
        </div>
    )
}

export default Remove