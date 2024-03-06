import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";

import CreateSurvey from "../components/create/CreateSurvey"
import CreateOption from "../components/create/CreateOption";

import { IReducer } from "../interfaces/Reducer";

import { selector } from "../helper/selector";

const Create = () => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const surveys = useSelector((state: IReducer) => selector(state).surveys)

  const dispatch = useDispatch()

  const [isOptions, setIsOptions] = useState<boolean>(false)

  return (
    <Box display="flex" justifyContent="center" alignItems="center" className="full-screen">
      {
        isOptions ? <CreateOption user={user.user} survey={surveys.survey} />
          : <CreateSurvey dispatch={dispatch} user={user.user} categories={surveys.categories} setIsOptions={setIsOptions} />
      }
    </Box>
  )
}

export default Create