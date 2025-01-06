import { Box, Typography, Button, Container } from '@mui/material';

const Resume = ({ setIsLogin }: { setIsLogin: (isLogin: boolean) => void; }) => {
  return (
    <Box
      sx={{
        mt: { xs: 9, sm: 12 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Container fixed maxWidth="lg">
        <Box sx={{
          m: { xs: 0, sm: 2, md: 4 },
          p: {
            xs: 1
          }
        }}>
          <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Typography variant="h4" component="h2" color={"#f64"} gutterBottom>
              ¡Únete Ahora Mismo!
            </Typography>
            <Typography variant="h6" color={"#f64"} paragraph>
              Forma parte de una comunidad donde tus ideas y opiniones cuentan. Empieza a crear, participar y descubrir insights únicos.
            </Typography>
            <Button
              variant="contained"
              color="warning"
              onClick={() => setIsLogin(true)}
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
        </Box>
      </Container>
    </Box>
  );
};

export default Resume;
