import { Box, Grid } from '@mui/material'

const MainImage = () => {
    return (
        <Grid item xs={12} md={6}>
            <Box
                component="img"
                src="/image.png"
                alt="Image Surfrage"
                sx={{
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: 3,
                }}
            />
        </Grid>
    )
}

export default MainImage