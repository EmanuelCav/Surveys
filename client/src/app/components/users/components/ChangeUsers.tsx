import { Box, Typography } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

import { ChangeUserPropsType } from "../../../types/props.types";

const ChangeUsers = ({ handlePage, page, usersLength }: ChangeUserPropsType) => {
    return (
        <Box width='100%' my={4} textAlign='center'>
            <Typography variant="h6" color='#666' sx={{
                userSelect: 'none',
                msUserSelect: 'none'
            }}>{`${page} / ${usersLength}`}</Typography>
            <Box display='flex' justifyContent='space-evenly' alignItems='center'>
                <MdOutlineArrowBackIos size={28} color={page === 1 ? '#fb4' : '#f64'} style={{ cursor: page === 1 ? 'default' : 'pointer' }} onClick={() => handlePage('BACK')} />
                <MdArrowForwardIos size={28} color={page === usersLength ? '#fb4' : '#f64'} style={{ cursor: page === usersLength ? 'default' :  'pointer' }} onClick={() => handlePage('NEXT')} />
            </Box>
        </Box>
    )
}

export default ChangeUsers