import { Box, Typography } from "@mui/material"

import { ActionSurveyPropsType } from "../../../../../../types/props.types"

const ActionSurvey = ({ data, Icon, func, isHover }: ActionSurveyPropsType) => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{
            cursor: isHover ? 'pointer' : 'default',
            ":hover": {
                color: isHover ? '#f64' : '#000'
            },
            ":active": {
                color: '#000'
            }
        }} onClick={func}>
            <Icon size={28} color={'#f64'} />
            <Typography variant="h6" ml={1}>
                {data}
            </Typography>
        </Box>
    )
}

export default ActionSurvey