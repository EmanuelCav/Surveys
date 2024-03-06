import { Box } from "@mui/material"
import { AiOutlineUser } from 'react-icons/ai';
import { MdExplore, MdAddCircle } from "react-icons/md";

import ButtonNav from "./ButtonNav"

import { NavIsAuthPropsType } from "../../../../../types/props.types";

const NavIsAuth = ({ navigate, id }: NavIsAuthPropsType) => {

    const redirectProfile = () => {
        navigate(`/profile/${id}`)
    }

    const redirectSurveys = () => {
        navigate('/surveys')
    }

    const redirectCreate = () => {
        navigate('/surveys/create')
    }

    return (
        <Box width='100%' sx={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            display: 'flex',
        }}>
            <ButtonNav func={redirectCreate} ComponentIcon={MdAddCircle} text="New" />
            <ButtonNav func={redirectSurveys} ComponentIcon={MdExplore} text="Explore" />
            <ButtonNav func={redirectProfile} ComponentIcon={AiOutlineUser} text="Profile" />
        </Box>
    )
}

export default NavIsAuth