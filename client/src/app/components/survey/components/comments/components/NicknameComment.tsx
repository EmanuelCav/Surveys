import { Box, Typography } from "@mui/material"

import { ActionCommentPropsType } from "../../../../../types/props.types"

const NicknameComment = ({ info, handleAction, Icon }: ActionCommentPropsType) => {
    return (
        <Box display="flex" justifyContent="left" alignItems="center">
            <Icon size={18} color={'#f00'} className="remove-icon-comment" onClick={handleAction} />
            <Typography variant="h6" ml={1}>{info}</Typography>
        </Box>
    )
}

export default NicknameComment