import { Box, Typography } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ActionPrivate from "./components/ActionPrivate";

import { ActionPrivateSurveyPropsType } from "../../../../../types/props.types";

const ActionPrivateSurvey = ({ setIsAction, func, text, buttonText }: ActionPrivateSurveyPropsType) => {

    const cancelAction = () => {
        setIsAction(false)
    }

    return (
        <Box width='100%' height='100vh' zIndex={44} position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)',
        }}>
            <ToastContainer />
            <Box position='absolute' maxWidth='37%' p={2} bgcolor='#fff' top='50%' left='50%' sx={{
                transform: 'translate(-50%, -50%)',
                WebkitTransform: 'translate(-50%, -50%)',
                msTransform: 'translate(-50%, -50%)'
            }}>
                <Typography variant="h6" component='h6'>
                    {text}
                </Typography>
                <ActionPrivate func={func} cancelAction={cancelAction} buttonText={buttonText} />
            </Box>
        </Box>
    )
}

export default ActionPrivateSurvey