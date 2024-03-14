import { Box, Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const NotFountPage = () => {

    const navigate = useNavigate()

    const redirectPage = () => {
        navigate('/')
    }

    return (
        <Box className="not-fount-container">
            <Box className="container-message-not-found">
                <Box component='img'
                    sx={{
                        height: 275,
                        width: 275
                    }}
                    alt="Icon"
                    src="https://res.cloudinary.com/projects-emanuek/image/upload/v1709490095/portfolio/icon_qfb1dl.png"
                />
                <Typography m={2} variant='h4'>Page not found</Typography>
                <Button variant='contained' color='warning' size='large' onClick={redirectPage}>
                    Come back
                </Button>
            </Box>
        </Box>
    )
}

export default NotFountPage