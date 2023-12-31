import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CreateSurvey from "../components/surveys/createSurvey"
import CreateOption from "../components/surveys/createOption";

import { IReducer } from "../interfaces/Reducer";

import { selector } from "../helper/selector";

const Create = () => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const surveys = useSelector((state: IReducer) => selector(state).surveys)

  const [isOptions, setIsOptions] = useState<boolean>(false)

  useEffect(() => {
  }, [isOptions])

  return (
    <div className="contaner-create" style={isOptions ? { height: '100%' } : { height: '100%' }}>
      {
        isOptions ? <CreateOption user={user.user} survey={surveys.survey} /> : <CreateSurvey setIsOptions={setIsOptions} />
      }
    </div>
  )
}

export default Create