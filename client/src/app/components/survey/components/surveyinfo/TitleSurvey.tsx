import { useState } from "react";
import { Box, Typography } from '@mui/material'
import { MdMoreVert } from "react-icons/md";

import PanelSurvey from './components/PanelSurvey';

import { TitleSurveyPropsType } from "../../../../types/props.types";

const TitleSurvey = ({ user, survey, setIsRemove, setIsState }: TitleSurveyPropsType) => {

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
                {survey.title}
            </Typography>
            {
                user.user?.id === survey.user!.id &&
                <MdMoreVert
                    size={28}
                    style={{ cursor: 'pointer' }}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
            }
            <PanelSurvey anchorEl={anchorEl} handleClose={handleClose} open={open} setIsState={setIsState} setIsRemove={setIsRemove} />
        </Box>
    )
}

export default TitleSurvey