import { useState, ChangeEvent, FC, useEffect } from "react";

import FormHeader from "../auth/components/formHeader"

import { ICreateOption } from "../../interfaces/Survey";

const CreateOption = () => {

  const initialState: ICreateOption[] = []

  const [optionData, setOptionData] = useState<ICreateOption[]>(initialState)
  const [inputs, setInputs] = useState<FC[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    let options = [...optionData]
    let option = { ...optionData[optionData.length] }
    option.name = e.target.value
    options[optionData.length] = option
    setOptionData(options)

  }

  const InputElement = () => {
    return (
      <div className="separator">
        <input type="text" className="input-form" placeholder="WRITE A SURVEY OPTION" onChange={handleChange} autoComplete="off" />
      </div>
    )
  }

  const addOption = () => {
    const newOption: ICreateOption = {
      name: ""
    }

    setOptionData([...optionData, newOption])
    setInputs([...inputs, InputElement])
  }

  useEffect(() => {
    console.log(optionData);

  }, [optionData])

  return (
    <form className="container-form-option">
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