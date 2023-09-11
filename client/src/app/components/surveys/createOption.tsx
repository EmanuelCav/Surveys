import { useState, ChangeEvent, FC, useEffect, FormEvent } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import FormHeader from "../auth/components/formHeader"

import { createOptionApi } from "../../server/api/surveys.api";
import { createOptionAction } from "../../server/features/surveys.features";

import { ICreateOption } from "../../interfaces/Survey";
import { getSurveyType } from "../../types/survey.types";

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

    if(optionData.length >= 6) {
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

    if(optionData.length < 2) {
      return;
    }

    for (let i = 0; i < optionData.length; i++) {

      const input = (document.getElementById(`name${i + 1}`) as HTMLInputElement).value

      try {
        const { data } = await createOptionApi({ name: input }, survey._id, user.token)
        dispatch(createOptionAction(data))
        navigate(`/profile/${user.user._id}`)
      } catch (error) {
        console.log(error);
      }
    }

  }

  useEffect(() => {
  }, [optionData])

  return (
    <form className="container-form-option" onSubmit={handleSumbit}>
      <div className="separator">
        <FormHeader />
      </div>
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