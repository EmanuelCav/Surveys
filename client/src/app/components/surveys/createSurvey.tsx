import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import FormHeader from "../auth/components/formHeader"

import { ICreateSurvey } from '../../interfaces/Survey';
import { IReducer } from '../../interfaces/Reducer';

import { surveyCreate } from '../../server/actions/survey.actions';

import { selector } from '../../helper/selector';

const CreateSurvey = ({ setIsOptions }: { setIsOptions: (isOption: boolean) => void }) => {

    const user = useSelector((state: IReducer) => selector(state).user)

    const dispatch = useDispatch()

    const initialState: ICreateSurvey = {
        title: ""
    }

    const [surveyData, setSurveyData] = useState(initialState)

    const { title } = surveyData

    const getData = async () => {
        dispatch(surveyCreate({
            setIsOptions,
            surveyData,
            token: user.user.token
        }) as any)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSurveyData({ ...surveyData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getData()
    }

    return (
        <form className="container-form-auth" onSubmit={handleSumbit}>
            <ToastContainer />
            <div className="separator">
                <FormHeader />
            </div>
            <div className="separator">
                <input type="text" name="title" className="input-form" placeholder="WRITE THE SURVEY TITLE" value={title} onChange={handleChange} maxLength={40} />
            </div>
            <div className="separator">
                <button className="button-form">
                    NEXT
                </button>
            </div>
        </form>
    )
}

export default CreateSurvey