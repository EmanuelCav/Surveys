import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Box, Button, SelectChangeEvent, TextField } from '@mui/material'

import SelectCountryInput from './components/SelectCountryInput'

import { IUpdateProfile } from '../../../../interfaces/User'
import { EditProfilePropsType } from '../../../../types/props.types'

import { countriesAction } from '../../../../server/features/user.features'
import { countriesApi } from '../../../../server/api/user.api'
import { updateProfile } from '../../../../server/actions/user.actions'

const FormProfile = ({ dispatch, user, setIsEditProfile }: EditProfilePropsType) => {

    const initialState: IUpdateProfile = {
        username: user.profile.username,
        description: user.profile.description ? user.profile.description : "",
        country: user.profile.country ? user.profile.country.country : ""
    }

    const [profileData, setProfileData] = useState<IUpdateProfile>(initialState)

    const { username, description, country } = profileData

    const handleCountries = async () => {

        try {

            const { data } = await countriesApi()
            dispatch(countriesAction(data))

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProfileData({ ...profileData, [name]: value })
    }

    const handleSelect = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target
        setProfileData({ ...profileData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(updateProfile({
            profileData,
            token: user.user.token!,
            setIsEditProfile
        }) as any)
    }

    useEffect(() => {
        handleCountries()
    }, [])

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
                inputProps={{ maxLength: 35 }}
            />
            <TextField
                fullWidth
                label='Profile description'
                name='description'
                value={description}
                color='warning'
                autoComplete='off'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    }
                }}
                margin='normal'
                multiline
                rows={4}
                onChange={handleChange}
                inputProps={{ maxLength: 200 }}
            />
            <SelectCountryInput text='Country' value={country} array={user.countries} handleChange={handleSelect} />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, fontSize: '1.225em' }}
                color='warning'
                size='large'
            >
                Accept
            </Button>
        </Box>
    )
}

export default FormProfile