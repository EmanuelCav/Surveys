import { Box, Button, TextField } from '@mui/material'

import { EditProfilePropsType } from '../../../../types/props.types'

const FormProfile = ({  }: EditProfilePropsType) => {
    return (
        <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                fullWidth
                type='text'
                label="Username"
                name="username"
                autoFocus
                color='warning'
                autoComplete='off'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    }
                }}
            />
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