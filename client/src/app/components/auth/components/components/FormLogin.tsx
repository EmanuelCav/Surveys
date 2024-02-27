import { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

import { ILogin } from '../../../../interfaces/User'
import { FormLAuthPropsType } from '../../../../types/props.types'

import { userLogin } from '../../../../server/actions/user.actions'

const FormLogin = ({ dispatch, navigate, handleIsAuth }: FormLAuthPropsType) => {

    const initialState: ILogin = {
        email: "",
        password: ""
    }

    const [userData, setUserData] = useState<ILogin>(initialState)

    const { email, password } = userData;

    const getData = async () => {

        dispatch(userLogin({
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
                Sign in
            </Button>
        </Box>
    )
}

export default FormLogin