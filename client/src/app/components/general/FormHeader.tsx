import { Box, Typography } from "@mui/material"

const FormHeader = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box
                component="img"
                sx={{
                    height: 128,
                    width: 128,
                }}
                alt="Icon"
                src="https://res.cloudinary.com/projects-emanuek/image/upload/v1709490095/portfolio/icon_qfb1dl.png"
            />
            <Typography variant="h4" color={'#f64'}>
                Surfrage
            </Typography>
        </Box>
    )
}

export default FormHeader