import { Box, Typography } from "@mui/material"

const FormHeader = () => {
    return (
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <Box
                component="img"
                sx={{
                    height: 128,
                    width: 128,
                }}
                alt="Icon"
                src="icon.png"
            />
            <Typography variant="h4" color={'#f64'}>
                Surfrage
            </Typography>
        </Box>
    )
}

export default FormHeader