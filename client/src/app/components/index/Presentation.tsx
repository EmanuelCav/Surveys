import { Box, Container, Grid } from "@mui/material";

import Introduction from "./components/presentation/Introduction";
import MainImage from "./components/presentation/MainImage";

const Presentation = ({ setIsLogin }: { setIsLogin: (isLogin: boolean) => void; }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh' ,
                mt: { xs: 12, md: 0 }
            }}>
            <Container fixed maxWidth="lg">
                <Box sx={{
                    m: { xs: 0, sm: 2, md: 4 },
                    p: {
                        xs: 1
                    }
                }}>
                    <Grid container spacing={2} p={4} alignItems="center">
                        <Introduction setIsLogin={setIsLogin} />
                        <MainImage />
                    </Grid>
                </Box>
            </ Container>
        </Box>
    )
}

export default Presentation