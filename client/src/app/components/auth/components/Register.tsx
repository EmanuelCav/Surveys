import { Box } from "@mui/material";

import FormRegister from "./components/FormRegister";
import CloseForm from "../../general/CloseForm";
import FormHeader from "../../general/FormHeader";
import FormTitle from "../../general/FormTitle";

import { RegisterPropsType } from "../../../types/props.types";

const Register = ({ navigate, handleIsAuth, dispatch }: RegisterPropsType) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#ffffff',
                width: { xs: '95%', md: "33.33%" },
                px: 4,
                py: 2,
                userSelect: 'none',
                overflowY: 'auto',
                position: 'relative'
            }}
        >
            <CloseForm func={handleIsAuth} />
            <FormHeader />
            <FormTitle title="Sign up" />
            <FormRegister navigate={navigate} dispatch={dispatch} handleIsAuth={handleIsAuth} />
        </Box>
    )
}

export default Register