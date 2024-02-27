import { Box, Typography } from "@mui/material"

const FormVisibility = ({ registerVisibility }: { registerVisibility: () => void }) => {
    return (
        <Box width='100%' display='flex' justifyContent='space-between' alignItems='center' mt={1}>
            <Typography component='p' sx={{
                cursor: 'pointer',
                ":hover": {
                    color: '#f64',
                },
                ":active": {
                    color: '#000'
                }
            }}>
                Forgot password?
            </Typography>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography component='p'>
                    Don't have an account?
                </Typography>
                <Typography component='p' variant="h6" color='#f64' ml={1} sx={{
                    cursor: 'pointer',
                    ":hover": {
                        textDecoration: 'underline'
                    },
                    ":active": {
                        textDecoration: 'none'
                    }
                }} onClick={registerVisibility}>
                    Register
                </Typography>
            </Box>
        </Box>
    )
}

export default FormVisibility