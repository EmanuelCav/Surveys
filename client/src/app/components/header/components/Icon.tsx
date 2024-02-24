import { Box } from "@mui/material";

import Logo from "./components/icon/Logo"
import TextHeader from "./components/icon/TextHeader";

import { IconPropsType } from '../../../types/props.types';


const Icon = ({ isLoggedIn, navigate, location }: IconPropsType) => {

    const redirectSurveys = () => {
        navigate('/')
    }

    const redirectUsers = () => {
        navigate('/users')
    }

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
            <Logo func={redirectSurveys} />
            <TextHeader />
        </Box>
    )
}

export default Icon