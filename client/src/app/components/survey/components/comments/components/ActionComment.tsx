import { Box, Typography } from "@mui/material"

import { ActionCommentPropsType } from "../../../../../types/props.types"

const ActionComment = ({ info, handleAction, Icon }: ActionCommentPropsType) => {
    return (
        <Box display="flex" justifyContent="left" alignItems="center">
            <Icon size={18} color={'#f64'} style={{ cursor: 'pointer' }} onClick={handleAction} />
            <Typography variant="h6" ml={1}>{info}</Typography>
        </Box>
    )
}

export default ActionComment