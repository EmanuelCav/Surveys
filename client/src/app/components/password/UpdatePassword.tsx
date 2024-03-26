import { ChangeEvent, useState } from "react";
import { Box, Button } from "@mui/material"

import InputPassword from "../general/InputPassword";

import { updatePassword } from "../../server/actions/user.actions";

import { IPassword } from "../../interfaces/User";
import { UpdatePasswordPropsType } from "../../types/props.types";

const UpdatePassword = ({ email, dispatch, navigate }: UpdatePasswordPropsType) => {

    const initialState: IPassword = {
        password: "",
        confirm: ""
    }

    const [userData, setUserData] = useState<IPassword>(initialState)

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirm, setShowConfirm] = useState<boolean>(false)

    const { password, confirm } = userData

    const setPassword = () => {
        setShowPassword(!showPassword)
    }
    const setConfirm = () => {
        setShowConfirm(!showConfirm)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSumbit = () => {
        dispatch(updatePassword({
            email,
            passwordData: userData,
            navigate
        }) as any)
    }

    return (
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSumbit}>
            <InputPassword value={password} handleChange={handleChange} setPassword={setPassword} showPassword={showPassword} text="Password" />
            <InputPassword value={confirm} handleChange={handleChange} setPassword={setConfirm} showPassword={showConfirm} text="Confirm" />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, fontSize: '1.225em' }}
                color='warning'
                size='large'
            >
                Update password
            </Button>
        </Box>
    )
}

export default UpdatePassword