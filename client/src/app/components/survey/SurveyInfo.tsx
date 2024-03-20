import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import InfoSurvey from "./components/surveyinfo/components/InfoSurvey";
import OptionsSurvey from "./components/surveyinfo/OptionsSurvey";
import TitleSurvey from "./components/surveyinfo/TitleSurvey";
import ActionPrivateSurvey from "./components/surveyinfo/components/ActionPrivateSurvey";

import { IVote } from "../../interfaces/Survey";
import { SurveyInfoPropsType } from "../../types/props.types";

import { surveyRemove, surveyUpdateState } from "../../server/actions/survey.actions";

import { totalVotes } from "../../helper/functions";

const SurveyInfo = ({ survey, user, dispatch, navigate }: SurveyInfoPropsType) => {

  const [isRemove, setIsRemove] = useState<boolean>(false)
  const [isState, setIsState] = useState<boolean>(false)
  const [isVoted, setIsVoted] = useState<boolean>(false)

  const removeSurvey = async () => {
    dispatch(surveyRemove({
      id: user.user?.id!,
      token: user.token!,
      survey,
      setIsRemove,
      navigate
    }) as any)
  }

  const handleState = () => {
    dispatch(surveyUpdateState({
      id: survey.id!,
      token: user.token!,
      stateData: {
        state: survey.state === "PUBLIC" ? "PRIVATE" : "PUBLIC"
      },
      setIsState
    }) as any)
  }

  useEffect(() => {

    for (let i = 0; i < survey.options!.length; i++) {
      survey.options![i].votes.find((vote: IVote) => {
        if (vote.userId === user.user?.id) {
          setIsVoted(true)
          return
        }
      })
    }

  }, [isVoted])

  return (
    <Box position="relative" p={2} sx={{
      borderWidth: 1,
      borderColor: '#f64',
      borderStyle: 'solid',
      textAlign: 'center'
    }}>
      {
        isRemove && <ActionPrivateSurvey setIsAction={setIsRemove} func={removeSurvey} text="A survey will be removed. Do you wish continue?" buttonText="Remove" />
      }
      {
        isState && <ActionPrivateSurvey setIsAction={setIsState} func={handleState} text="Are you sure to change the visibility?" buttonText="Accept" />
      }
      <TitleSurvey survey={survey} user={user} setIsState={setIsState} setIsRemove={setIsRemove} />
      <Typography variant="h5">{survey.title}</Typography>
      <OptionsSurvey survey={survey} isVoted={isVoted} setIsVoted={setIsVoted} totalVotes={totalVotes(survey.options!)} user={user} />
      <InfoSurvey survey={survey} user={user} />
      <Typography variant="h6" align="center" mt={2} color="#f64">
        Votes: {totalVotes(survey.options!)}
      </Typography>
    </Box>
  )
}

export default SurveyInfo