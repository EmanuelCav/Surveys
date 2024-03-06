import { Box, Typography } from "@mui/material"

import { NoSuveysPropsType } from "../../../../types/props.types"

const NoSuveys = ({ isUser, redirectCreate }: NoSuveysPropsType) => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Box
                component="img"
                sx={{
                    height: 312,
                    width: 312,
                    userSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none'
                }}
                alt="Icon"
                src="https://res.cloudinary.com/projects-emanuek/image/upload/v1709490095/portfolio/icon_qfb1dl.png"
            />
            <Typography variant='h5' color='#f64'>{isUser ? 'You have not surveys' : 'This user has not posts'}</Typography>
            {
                isUser &&
                <Typography variant='h4' display="inline" color='#f64' sx={{
                    ":hover": {
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }
                }} onClick={redirectCreate}>Start now!
                </Typography>
            }
        </Box>
    )
}

export default NoSuveys