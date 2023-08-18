import { useState } from "react";

import CreateSurvey from "../components/surveys/createSurvey"
import CreateOption from "../components/surveys/createOption";

const Create = () => {

  const [isOptions, setIsOptions] = useState(false)

  return (
    <div className="contaner-create">
      {
        isOptions ? <CreateSurvey setIsOptions={setIsOptions} /> : <CreateOption />
      }
    </div>
  )
}

export default Create