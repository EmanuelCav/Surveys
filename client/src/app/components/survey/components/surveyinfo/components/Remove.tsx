import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ActionRemove from "./components/ActionRemove";

import { RemovePropsType } from "../../../../../types/props.types";

import { surveyRemove } from "../../../../../server/actions/survey.actions";

const Remove = ({ setIsRemove, survey, user }: RemovePropsType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const removeSurvey = async () => {
        dispatch(surveyRemove({
            id: user.user.id,
            token: user.token,
            survey,
            setIsRemove,
            navigate
        }) as any)
    }

    const cancelRemove = () => {
        setIsRemove(false)
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
                <Typography noWrap variant="h6" component='h6'>
                    The survey will be removed. Do you wish to continue?
                </Typography>
                <ActionRemove removeSurvey={removeSurvey} cancelRemove={cancelRemove} />
            </Box>
        </Box>
    )
}

export default Remove