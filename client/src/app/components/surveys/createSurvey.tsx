import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormHeader from "../auth/components/formHeader"

import { createSurveyApi } from "../../server/api/surveys.api";
import { surveysAction } from "../../server/features/surveys.features";

import { ICreateSurvey } from '../../interfaces/Survey';

import { IReducer } from '../../interfaces/Reducer';

const CreateSurvey = ({ setIsOptions }: { setIsOptions: (isOption: boolean) => void }) => {

    const { user } = useSelector((state: IReducer) => state)

    const dispatch = useDispatch()

    const initialState: ICreateSurvey = {
        title: ""
    }

    const [surveyData, setSurveyData] = useState(initialState)

    const { title } = surveyData

    const getData = async () => {

        try {
            const { data } = await createSurveyApi(surveyData, user.user.token)
            dispatch(surveysAction(data))
            setIsOptions(true)
        } catch (error) {
            console.log(error);
        }

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
            <div className="separator">
                <FormHeader />
            </div>
            <div className="separator">
                <input type="text" name="title" className="input-form" placeholder="WRITE THE SURVEY TITLE" value={title} onChange={handleChange} />
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