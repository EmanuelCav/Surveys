import { NavigateFunction } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'

const HeaderFooter = ({ navigate }: { navigate: NavigateFunction }) => {
    return (
        <Grid item xs={12} sm={6} container alignItems="start" justifyContent="center">
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", flexWrap: 'wrap' }}>
                <Box
                    component="img"
                    src="/icon.png"
                    alt="icon"
                    onClick={() => navigate("/")}
                    sx={{ cursor: 'pointer' }}
                    className="no-select"
                    width={60}
                    height={60}
                />
                <Typography variant="h5" component="div" sx={{ fontWeight: 700, ml: 1 }}>
                    Surfrage
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Typography variant="body1" mt={2} sx={{ fontStyle: 'italic', textAlign: 'center' }}>
                        ¡Crea, comparte y analiza encuestas de manera eficiente y visualmente atractiva!
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default HeaderFooter