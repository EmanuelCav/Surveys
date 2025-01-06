import { Grid } from "@mui/material";

import Survey from "./components/survey/Survey";

import { ISurvey } from "../../interfaces/Survey";
import { ShowSurveysPropsType } from "../../types/props.types";

const ShowSurveys = ({ surveys, redirectSurvey, user }: ShowSurveysPropsType) => {
    return (
        <Grid 
            container 
            spacing={2} 
            p={{ xs: 2, sm: 4 }}
        >
            {surveys.map((survey: ISurvey) => (
                <Survey 
                    survey={survey} 
                    redirectSurvey={redirectSurvey} 
                    user={user} 
                    key={survey.id} 
                />
            ))}
        </Grid>
    );
};

export default ShowSurveys;
