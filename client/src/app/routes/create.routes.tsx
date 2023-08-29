import { useState, useEffect } from "react";

import CreateSurvey from "../components/surveys/createSurvey"
import CreateOption from "../components/surveys/createOption";

const Create = () => {

  const [isOptions, setIsOptions] = useState(false)

  useEffect(() => {
  }, [isOptions])

  return (
    <div className="contaner-create" style={isOptions ? { height: '100%' } : { height: '100%' }}>
      {
        isOptions ? <CreateSurvey setIsOptions={setIsOptions} /> : <CreateOption />
      }
    </div>
  )
}

export default Create