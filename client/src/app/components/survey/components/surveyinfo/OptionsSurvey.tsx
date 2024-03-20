import { Box } from '@mui/material'

import ShowOption from './components/ShowOptions'

import { IOption } from '../../../../interfaces/Survey'
import { OptionsSurveyPropsType } from '../../../../types/props.types'

const OptionsSurvey = ({ survey, isVoted, setIsVoted, user, totalVotes }: OptionsSurveyPropsType) => {

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={2}>
            {
                survey.options!.map((option: IOption) => {
                    return <ShowOption survey={survey} user={user} option={option}
                        isVoted={isVoted} setIsVoted={setIsVoted} totalVotes={totalVotes} key={option.id} />
                })
            }
        </Box>
    )
}

export default OptionsSurvey