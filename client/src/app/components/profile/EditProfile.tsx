import { Box } from "@mui/material"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CloseForm from "../general/CloseForm";
import FormHeader from "../general/FormHeader";
import FormTitle from "../general/FormTitle";
import FormProfile from "./components/editProfile/FormProfile";

import { EditProfilePropsType } from "../../types/props.types";

const EditProfile = ({ navigate, dispatch, handleEditProfile, user }: EditProfilePropsType) => {
    return (
        <Box position='fixed' display="flex" justifyContent='center' alignItems='center' sx={{
            top: 0,
            left: 0,
            height: '100vh',
            width: '100%',
            background: 'rgba(0,0,0,0.4)',
            zIndex: 12,
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
                <ToastContainer limit={1} />
                <CloseForm func={handleEditProfile} />
                <FormHeader />
                <FormTitle title="Update profile" />
                <FormProfile navigate={navigate} dispatch={dispatch} handleEditProfile={handleEditProfile} user={user} />
            </Box>
        </Box>
    )
}

export default EditProfile