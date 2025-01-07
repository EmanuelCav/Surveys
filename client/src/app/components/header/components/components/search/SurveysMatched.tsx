import { Box } from "@mui/material"

import SurveyMatched from "./components/SurveyMatched"

import { SurveysMatchedPropsType } from "../../../../../types/props.types"
import { ISurvey } from "../../../../../interfaces/Survey"

const SurveysMatched = ({ surveys, getSurvey }: SurveysMatchedPropsType) => {

    return (
        <Box position="absolute" zIndex={44} sx={{ transform: "translate(-50%, -50%)",
          }} top={125} left="50%" width={312}>
            {
                surveys.map((survey: ISurvey) => {
                    return <SurveyMatched survey={survey} getSurvey={getSurvey} key={survey.id} />
                })
            }
        </Box>
    )
}

export default SurveysMatched