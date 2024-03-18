import { Box, Button, Typography } from '@mui/material';

import { NavigateFunction } from 'react-router-dom';

const InfoStart = ({ navigate }: { navigate: NavigateFunction }) => {

    const redirectLogin = () => {
        navigate('/explore/surveys')
    }

    return (
        <Box width='50%' p={3} height='100%' display="flex" justifyContent="center" alignItems='center' flexDirection='column' sx={{
            wordWrap: 'break-word'
        }}>
            <Typography variant='h4' textAlign='center'>
                Create and take part in surveys in a simple way
            </Typography>
            <Button variant='contained' color='warning' size='large' onClick={redirectLogin} sx={{
                mt: 3,
                width: '66.66%'
            }}>
                Start Now ➜
            </Button>
        </Box>
    )
}

export default InfoStart