import { Card, CardContent, Grid, Typography } from "@mui/material";
import InfoShowSurvey from "./components/InfoShowSurvey";
import ListOptionsSurvey from "./components/ListOptionsSurvey";
import ButtonCard from "../../ButtonCard";

import { SurveyPropsType } from "../../../../types/props.types";

const Survey = ({ survey, redirectSurvey, user }: SurveyPropsType) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          boxShadow: "0 0 2px 1px #f76 inset",
          p: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography noWrap variant="h6" align="center" component="div">
            {survey.title}
          </Typography>
          <ListOptionsSurvey options={survey.options!} />
          <Typography variant="subtitle1" mt={1}>
            More...
          </Typography>
          <InfoShowSurvey survey={survey} user={user} />
        </CardContent>
        <ButtonCard id={survey.id!} func={redirectSurvey} text="Take part" />
      </Card>
    </Grid>
  );
};

export default Survey;
