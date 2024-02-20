import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { removeSurveyType } from "../../../../types/survey.types";

import { surveyRemove } from "../../../../server/actions/survey.actions";

const Remove = ({ setIsRemove, survey, user }: removeSurveyType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const removeSurvey = async () => {
        dispatch(surveyRemove({
            id: user.user._id,
            token: user.token,
            survey,
            setIsRemove,
            navigate
        }) as any)
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