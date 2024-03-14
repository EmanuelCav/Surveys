import { Box, Typography } from "@mui/material"

import { ActionSurveyPropsType } from "../../../../../../types/props.types"

const ActionSurvey = ({ data, Icon, func }: ActionSurveyPropsType) => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{
            cursor: 'pointer',
            ":hover": {
                color: '#f64'
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