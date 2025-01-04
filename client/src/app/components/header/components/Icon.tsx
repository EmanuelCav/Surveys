import { Box } from "@mui/material";

import Logo from "./components/icon/Logo"
import TextHeader from "./components/icon/TextHeader";

import { IconPropsType } from '../../../types/props.types';


const Icon = ({ navigate, location }: IconPropsType) => {

    const redirectIndex = () => {
        if (location.pathname === "/") return
        navigate('/')
    }

    return (
        <Box sx={{
            userSelect: 'none'
        }} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
            <Logo redirectIndex={redirectIndex} />
            <TextHeader redirectIndex={redirectIndex} />
        </Box>
    )
}

export default Icon