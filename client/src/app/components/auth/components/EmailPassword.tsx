import { Box } from "@mui/material"

import CloseForm from "../../general/CloseForm"
import FormTitle from "../../general/FormTitle"
import FormEmail from "./components/FormEmail"

import { EmailPasswordPropsType } from "../../../types/props.types"

const EmailPassword = ({ handleResetPassword, dispatch }: EmailPasswordPropsType) => {
    return (
        <Box position='fixed' display="flex" justifyContent='center' alignItems='center' sx={{
            top: 0,
            left: 0,
            height: '100vh',
            width: '100%',
            background: 'rgba(0,0,0,0.4)',
            zIndex: 24,
            overflow: 'hidden'
        }}>
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
                <CloseForm func={handleResetPassword} />
                <FormTitle title="Write your email to reset your password" />
                <FormEmail dispatch={dispatch} />
            </Box>
        </Box>
    )
}

export default EmailPassword