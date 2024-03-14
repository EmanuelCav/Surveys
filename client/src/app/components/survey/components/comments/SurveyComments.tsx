import { Box } from '@mui/material'

import Comment from './components/Comment'

import { IComment } from '../../../../interfaces/Survey'
import { SurveyCommentsPropsType } from '../../../../types/props.types'

const SurveyComments = ({ comments, user }: SurveyCommentsPropsType) => {
    return (
        <Box width='100%' px={2} py={1}>
            {
                comments.length > 0 &&
                comments.map((comment: IComment, index: number) => {
                    return <Comment comment={comment} user={user} key={index} />
                })
            }
        </Box>
    )
}

export default SurveyComments