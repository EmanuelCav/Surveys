import { useState, ChangeEvent, FC } from "react";

import FormHeader from "../auth/components/formHeader"

import { ICreateOption } from "../../interfaces/Survey";

const CreateOption = () => {

  const initialState: ICreateOption = {
    name: ""
  }

  const [optionData, setOptionData] = useState(initialState)
  const [inputs, setInputs] = useState<FC[]>([])

  const { name } = optionData
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOptionData({ ...optionData, [name]: value })
  }
  
  const InputElement = () => {
    return (
      <div className="separator">
        <input type="text" name="name" className="input-form" placeholder="WRITE A SURVEY OPTION" value={name} onChange={handleChange} autoComplete="off" />
      </div>
    )
  }
  
  const addOption = () => {
    setInputs([...inputs, InputElement])
  }

  return (
    <form className="container-form-auth">
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
      <div className="separator">
        <button className="button-form">
          CREATE SURVEY
        </button>
      </div>
    </form>
  )
}

export default CreateOption