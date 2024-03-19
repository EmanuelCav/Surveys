import { Paper, Typography } from '@mui/material';
import { TbWorldCheck } from 'react-icons/tb';
import { RiSurveyLine } from "react-icons/ri";

import { cardType } from "../../../../types/index.types";

const CardData = ({ header, text, card }: cardType) => {
    return (
        <Paper elevation={3} sx={{
            padding: 3,
            width: 320,
            height: '66.66%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            userSelect: 'none',
            msUserSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none'
        }}>
            {
                card ? <RiSurveyLine size={70} color={'#f64'} /> : <TbWorldCheck size={70} color={'#f64'} />
            }
            <Typography variant='h4' textAlign='center'>{header}</Typography>
            <Typography variant='h5' textAlign='center'>{text}</Typography>
        </Paper>
    )
}

export default CardData