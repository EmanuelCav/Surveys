import { Box, Button, Grid, Typography } from "@mui/material"

const Introduction = ({ setIsLogin }: { setIsLogin: (isLogin: boolean) => void; }) => {
    return (
        <Grid xs={12} md={6} p={2} item>
            <Typography variant="h3" color={"#f64"} align="center" component="h1" gutterBottom>
                ¡Bienvenido a Surfrage!
            </Typography>
            <Typography variant="h5" paragraph align="center">
                ¡Crea, comparte y analiza encuestas de manera eficiente y visualmente atractiva!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={() => setIsLogin(true)}
                    variant="contained"
                    color="warning"
                    sx={{
                        mt: 2,
                        border: '2px solid white',
                        fontWeight: 600,
                        fontSize: 16,
                        px: 6,
                        '&:hover': {
                            backgroundColor: '#f64'
                        }
                    }}
                >
                    Comienza Ahora
                </Button>
            </Box>
        </Grid>
    )
}

export default Introduction