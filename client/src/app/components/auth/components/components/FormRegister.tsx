import { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { IRegister } from '../../../../interfaces/User';
import { FormLAuthPropsType } from '../../../../types/props.types';

import { userRegister } from '../../../../server/actions/user.actions';

const FormRegister = ({ dispatch, navigate, handleIsAuth }: FormLAuthPropsType) => {

    const initialState: IRegister = {
        username: "",
        email: "",
        gender: "",
        password: "",
        confirm: "",
    }

    const [userData, setUserData] = useState<IRegister>(initialState)

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirm, setShowConfirm] = useState<boolean>(false)

    const { email, password } = userData;

    const setPassword = () => {
        setShowPassword(!showPassword)
    }
    const setConfirm = () => {
        setShowConfirm(!showConfirm)
    }

    const getData = async () => {

        dispatch(userRegister({
            userData,
            navigate,
            handleIsAuth
        }) as any)

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getData()
    }

    return (
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSumbit}>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                autoFocus
                color='warning'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    },
                }}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                color='warning'
                value={password}
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    },
                }}
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                color='warning'
                size='large'
            >
                Sign up
            </Button>
        </Box>
    )
}

export default FormRegister