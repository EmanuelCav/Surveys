import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

import Participate from './components/createAndParticipate/Participate';
import CreateNow from './components/createAndParticipate/CreateNow';

const CreateAndParticipate: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f64',
      height: { xs: '100%', md: '100vh' }
    }} id='Herramientas'>
      <Container fixed maxWidth="lg">
        <Box sx={{
          m: { xs: 0, sm: 2, md: 4 },
          p: {
            xs: 1
          }
        }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Typography variant="h4" color="#ffffff" fontWeight={500} component="h2" gutterBottom>
              Crea y Participa
            </Typography>
            <Typography variant="h6" color="#ffffff">
              Forma parte de encuestas y también crear las tuyas para recopilar información valiosa.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Participate />
            <CreateNow />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateAndParticipate;
