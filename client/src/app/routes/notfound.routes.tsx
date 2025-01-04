import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const NotFountPage = () => {

    const navigate = useNavigate()

    const redirectPage = () => {
        navigate('/')
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="full-screen">
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
    )
}

export default NotFountPage