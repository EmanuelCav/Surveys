import { Box } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormHeader from '../../general/FormHeader';
import FormLogin from './components/FormLogin';
import CloseForm from '../../general/CloseForm';
import FormVisibility from "./components/FormVisibility";
import FormTitle from "../../general/FormTitle";

import { LoginPropsType } from '../../../types/props.types';

const Login = ({ navigate, handleIsAuth, dispatch, registerVisibility, handleResetPassword }: LoginPropsType) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#ffffff',
                width: '28%',
                px: 4,
                py: 2,
                userSelect: 'none',
                position: 'relative'
            }}
        >
            <ToastContainer limit={1} />
            <CloseForm func={handleIsAuth} />
            <FormHeader />
            <FormTitle title="Sign in" />
            <FormLogin dispatch={dispatch} navigate={navigate} handleIsAuth={handleIsAuth} />
            <FormVisibility registerVisibility={registerVisibility} handleResetPassword={handleResetPassword} />
        </Box>
    )
}

export default Login