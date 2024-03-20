import { Box } from '@mui/material'

import NoSurveys from './components/NoSurveys'

import { ActionSurveyProfilePropsType } from '../../../../types/props.types'

const ActionSurveyProfile = ({ user, redirectCreate }: ActionSurveyProfilePropsType) => {
    return (
        <Box>
            {
                user.profile.surveys.length === 0 &&
                <Box width='100%'>
                    {
                        user.profile.id === user.user.user?.id ? (
                            <NoSurveys isUser={user.profile.id === user.user.user?.id} redirectCreate={redirectCreate} />
                        ) : (
                            <NoSurveys isUser={user.profile.id === user.user.user?.id} redirectCreate={redirectCreate} />
                        )
                    }
                </Box>
            }
        </Box>
    )
}

export default ActionSurveyProfile