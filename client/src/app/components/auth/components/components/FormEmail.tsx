import { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Dispatch } from '@reduxjs/toolkit';

import { IEmail } from '../../../../interfaces/User'

import { emailPasswordApi } from '../../../../server/api/user.api';

import { successMessage } from '../../../../helper/message';
import { userAction } from '../../../../server/features/user.features';

const FormEmail = ({ dispatch }: { dispatch: Dispatch }) => {

    const initialState: IEmail = {
        email: ""
    }

    const [emailData, setEmailData] = useState<IEmail>(initialState)

    const { email } = emailData

    const getData = async () => {

        try {

            const { data } = await emailPasswordApi(emailData)
            successMessage(data.message)
            dispatch(userAction(data.user))

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setEmailData({ ...emailData, [name]: value })
    }

    const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getData()
    }

    return (
        <Box component="form" noValidate sx={{ mt: 1, width: '100%' }} onSubmit={handleSumbit}>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Write your email"
                name="email"
                value={email}
                autoFocus
                color='warning'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    },
                }}
                onChange={handleChange}
                autoComplete='off'
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                color='warning'
                size='large'
            >
                Send
            </Button>
        </Box>
    )
}

export default FormEmail