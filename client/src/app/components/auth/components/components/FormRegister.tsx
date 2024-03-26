import { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Button, Checkbox, SelectChangeEvent, TextField, Typography } from '@mui/material'

import SelectGenderInput from './components/SelectGenderInput';
import InputPassword from '../../../general/InputPassword';

import { IRegister } from '../../../../interfaces/User';
import { FormLAuthPropsType } from '../../../../types/props.types';

import { userRegister } from '../../../../server/actions/user.actions';

import { genders } from '../../../../helper/properties';

const FormRegister = ({ dispatch, navigate, handleIsAuth }: FormLAuthPropsType) => {

    const initialState: IRegister = {
        username: "",
        email: "",
        gender: "",
        password: "",
        confirm: "",
        status: false
    }

    const [userData, setUserData] = useState<IRegister>(initialState)

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirm, setShowConfirm] = useState<boolean>(false)

    const { username, email, password, confirm, gender, status } = userData;

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

    const handleSelect = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        setUserData({ ...userData, [name]: checked })
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
                type='text'
                label="Username"
                name="username"
                value={username}
                autoFocus
                color='warning'
                autoComplete='off'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    }
                }}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="off"
                value={email}
                autoFocus
                color='warning'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    }
                }}
                onChange={handleChange}
            />
            <SelectGenderInput array={genders} handleChange={handleSelect} text='Gender' value={gender} />
            <InputPassword value={password} handleChange={handleChange} setPassword={setPassword} showPassword={showPassword} />
            <InputPassword value={confirm} handleChange={handleChange} setPassword={setConfirm} showPassword={showConfirm} />
            <Box mt={2} display='flex' justifyContent='flex-start' alignItems='center'>
                <Checkbox color='warning' name='status' value={status} checked={status} onChange={handleChecked} />
                <Typography component='h6' color='#f64' sx={{
                    cursor: 'pointer',
                    ":hover": {
                        textDecoration: 'underline'
                    },
                    ":active": {
                        textDecoration: 'none'
                    }
                }}>
                    Accept Terms and confitions
                </Typography>
            </Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                color='warning'
                size='large'
            >
                Sign up
            </Button>
        </Box >
    )
}

export default FormRegister