import { Box, Typography } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormRegister from "./components/FormRegister";
import CloseForm from "../../general/CloseForm";
import FormHeader from "../../general/FormHeader";

import { RegisterPropsType } from "../../../types/props.types";
import FormTitle from "../../general/FormTitle";

const Register = ({ navigate, handleIsAuth, dispatch }: RegisterPropsType) => {

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
            <FormTitle title="Sign up" />
            <FormRegister navigate={navigate} dispatch={dispatch} handleIsAuth={handleIsAuth} />
        </Box>
    )
}

export default Register