import { Box, Grid, Container } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';

import { INavigation } from '../../interfaces/General';

import CopyRight from './components/footer/CopyRight';
import HeaderFooter from './components/footer/HeaderFooter';
import NavigationFooter from './components/footer/NavigationFooter';

const resources: INavigation[] = [{
    title: "Inicio",
    path: "/"
}, {
    title: "Explorar",
    path: "/explore/surveys"
}]

const terms: INavigation[] = [{
    title: "Política de privacidad",
    path: "/"
}, {
    title: "Términos de servicio",
    path: "/"
}]

const Footer = ({ navigate }: { navigate: NavigateFunction }) => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#222222',
                color: 'white',
                padding: { xs: 3, sm: 4 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 4
            }}
        >
            <Container fixed maxWidth="lg">
                <Grid container spacing={4}>
                    <HeaderFooter navigate={navigate} />
                    <Grid item xs={12} sm={6} container justifyContent="center">
                        <NavigationFooter navigation={resources} title='Recursos' />
                        <NavigationFooter navigation={terms} title='Términos y Políticas' />
                    </Grid>
                </Grid>
                <CopyRight />
            </Container>
        </Box>
    );
};

export default Footer;
