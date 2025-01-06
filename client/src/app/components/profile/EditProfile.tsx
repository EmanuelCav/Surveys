import { Box } from "@mui/material"

import CloseForm from "../general/CloseForm";
import FormHeader from "../general/FormHeader";
import FormTitle from "../general/FormTitle";
import FormProfile from "./components/editProfile/FormProfile";

import { EditProfilePropsType } from "../../types/props.types";

const EditProfile = ({ navigate, dispatch, handleEditProfile, user, setIsEditProfile }: EditProfilePropsType) => {
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
                    width: { xs: '95%', md: '33.33%' },
                    px: 4,
                    py: 2,
                    userSelect: 'none',
                    position: 'relative'
                }}
            >
                <CloseForm func={handleEditProfile} />
                <FormHeader />
                <FormTitle title="Update profile" />
                <FormProfile navigate={navigate} dispatch={dispatch} handleEditProfile={handleEditProfile} user={user} setIsEditProfile={setIsEditProfile} />
            </Box>
        </Box>
    )
}

export default EditProfile