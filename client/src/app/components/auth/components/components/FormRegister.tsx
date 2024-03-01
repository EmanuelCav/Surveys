import { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
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
                autoComplete="email"
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
            <FormControl fullWidth sx={{
                mt: 2,
                mb: 1
            }}>
                <InputLabel color='warning'>Age</InputLabel>
                <Select
                    name='gender'
                    value={gender}
                    label="Age"
                    color='warning'
                    onChange={handleSelect}
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#f64 !important',
                        },
                    }}
                >
                    {
                        genders.map((g) => {
                            return <MenuItem sx={{ background: gender === g ? '#dddddd !important' : '#ffffff' }} value={g} key={g}>
                                {g}
                            </MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <Box sx={{ position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', mt: 2 }}>
                <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    color='warning'
                    value={password}
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#f64 !important'
                        },
                        m: 0
                    }}
                    onChange={handleChange}
                />
                {
                    showPassword ?
                        <AiFillEyeInvisible color='#f64' size={24} className='eye-icon' onClick={setPassword} />
                        : <AiFillEye color='#f64' size={24} className='eye-icon' onClick={setPassword} />
                }
            </Box>
            <Box sx={{ position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', mt: 3 }}>
                <TextField
                    margin="normal"
                    fullWidth
                    name="confirm"
                    label="Confirm password"
                    type={showConfirm ? 'text' : 'password'}
                    color='warning'
                    value={confirm}
                    sx={{
                        '&:hover fieldset': {
                            borderColor: '#f64 !important',
                        },
                        m: 0
                    }}
                    onChange={handleChange}
                />
                {
                    showConfirm ?
                        <AiFillEyeInvisible color='#f64' size={24} className='eye-icon' onClick={setConfirm} />
                        : <AiFillEye color='#f64' size={24} className='eye-icon' onClick={setConfirm} />
                }
            </Box>
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