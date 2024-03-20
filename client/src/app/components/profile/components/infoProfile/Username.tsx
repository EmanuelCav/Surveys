import { useState } from 'react';
import { Box, Typography } from '@mui/material'
import { MdMoreVert } from "react-icons/md";

import Panel from './components/Panel';

import { UsernamePropsType } from '../../../../types/props.types';

const Username = ({ user, loggedUser, dispatch, navigate }: UsernamePropsType) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' flexDirection='row'>
            <Typography variant='h4' color='#f76'>
                {user.username}
            </Typography>
            {
                user.id === loggedUser.user?.id &&
                <MdMoreVert
                    size={28}
                    style={{ cursor: 'pointer' }}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
            }
            <Panel anchorEl={anchorEl} handleClose={handleClose} open={open} navigate={navigate} dispatch={dispatch} />
        </Box>
    )
}

export default Username