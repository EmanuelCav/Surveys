import { useState, ChangeEvent, FC, useEffect, FormEvent } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createOptionApi } from "../../server/api/surveys.api";
import { createOptionAction } from "../../server/features/surveys.features";

import { ICreateOption } from "../../interfaces/Survey";
import { getSurveyType } from "../../types/survey.types";

import { dangerMessage } from "../../helper/message";

const CreateOption = ({ user, survey }: getSurveyType) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState: ICreateOption[] = []

  const [optionData, setOptionData] = useState<ICreateOption[]>(initialState)
  const [inputs, setInputs] = useState<FC[]>([])

  const InputElement = () => {
    return (
      <div className="separator">
        <input type="text" id={`name${optionData.length + 1}`} className="input-form" placeholder="WRITE A SURVEY OPTION" onChange={handleChange} autoComplete="off" maxLength={75} />
      </div>
    )
  }

  const addOption = () => {

    if (optionData.length >= 6) {
      dangerMessage("You can upload a maximum of 6 options")
      return;
    }

    const newOption: ICreateOption = {
      name: ""
    }

    setOptionData([...optionData, newOption])
    setInputs([...inputs, InputElement])
  }

  const removeOption = () => {
    let options = [...optionData]
    let allInputs = [...inputs]
    options.pop()
    allInputs.pop()
    setOptionData(options)
    setInputs(allInputs)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    let options = [...optionData]
    let option = { ...optionData[optionData.length] }
    option.name = e.target.value
    options[optionData.length] = option
    setOptionData(options)

  }

  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (optionData.length < 2) {
      dangerMessage("You have to upload at least 2 options")
      return
    }

    for (let i = 0; i < optionData.length; i++) {

      const input = (document.getElementById(`name${i + 1}`) as HTMLInputElement).value

      try {
        const { data } = await createOptionApi({ name: input }, survey.id, user.token)
        dispatch(createOptionAction(data))
        navigate(`/profile/${user.user.id}`)
      } catch (error: any) {
        dangerMessage(error.response.data.message)
      }
    }

  }

  return (
    <form className="container-form-option" onSubmit={handleSumbit}>
      <ToastContainer />
      <div className="separator">
        {
          inputs.map((Input: FC, index: number) => {
            return <Input key={index} />
          })
        }
      </div>
      <div className="separator container-add-option" onClick={addOption}>
        <p className="auth-text-account-form">
          Add an option
        </p>
      </div>
      {
        optionData.length > 0 &&
        <div className="separator">
          <p className="auth-text-account-form" onClick={removeOption}>Remove option</p>
        </div>
      }
      <div className="separator">
        <button className="button-form">
          CREATE SURVEY
        </button>
      </div>
    </form>
  )
}

export default CreateOption