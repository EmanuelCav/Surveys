import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

import BarGraph from './components/visualization/BarGraph';
import PieChart from './components/visualization/PieChart';

const Visualization: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    }} id='Herramientas'>
      <Container fixed maxWidth="lg">
        <Box sx={{
          m: { xs: 0, sm: 2, md: 4 },
          p: {
            xs: 1
          }
        }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Typography variant="h4" component="h2" color={"#f64"} fontWeight={500} gutterBottom>
              Visualización que impacta
            </Typography>
            <Typography variant="h6" color={"#f64"}>
              Convierte tus datos en gráficos dinámicos y fáciles de interpretar. Desde estadísticas rápidas hasta análisis profundos, ¡tus datos cobran vida con nuestras herramientas visuales!
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <BarGraph />
            <PieChart />
          </Grid>
        </Box>
      </Container >
    </Box >
  );
};

export default Visualization;
