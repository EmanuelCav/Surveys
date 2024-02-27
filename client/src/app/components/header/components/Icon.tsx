import { Box } from "@mui/material";

import Logo from "./components/icon/Logo"
import TextHeader from "./components/icon/TextHeader";

import { IconPropsType } from '../../../types/props.types';


const Icon = ({ isLoggedIn, navigate, location }: IconPropsType) => {

    const redirectIndex = () => {
        if(location.pathname === "/") return

        if(isLoggedIn) {
            navigate('/surveys')    
            return
        }

        navigate('/')
    }

    return (
        <Box sx={{
            cursor: location.pathname === "/" ? 'default' : 'pointer',
            userSelect: 'none'
        }} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}
        onClick={redirectIndex}>
            <Logo />
            <TextHeader />
        </Box>
    )
}

export default Icon