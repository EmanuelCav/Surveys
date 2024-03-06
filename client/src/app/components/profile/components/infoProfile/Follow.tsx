import { Box, Typography } from "@mui/material"

import { FollowPropsType } from "../../../../types/props.types"

const Follow = ({ number, ml, text }: FollowPropsType) => {
    return (
        <Box ml={ml} display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='h5' color='#f76'>
                {text}:
            </Typography>
            <Typography variant='h5' ml={1}>
                {number}
            </Typography>
        </Box>
    )
}

export default Follow