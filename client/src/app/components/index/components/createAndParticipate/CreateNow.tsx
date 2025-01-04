import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';

const CreateNow = () => {
  return (
    <Grid item xs={12} md={6}>
              <Card sx={{
                textAlign: 'center', padding: '1rem', height: '100%', '&:hover': {
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                  transform: 'scale(1.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }
              }}>
                <CardContent>
                  <Avatar
                    sx={{
                      backgroundColor: '#ff5722',
                      width: 60,
                      height: 60,
                      margin: '0 auto',
                      marginBottom: '1rem',
                    }}
                  >
                    <CreateIcon sx={{ fontSize: 30 }} />
                  </Avatar>
                  <Typography variant="h5" fontWeight={500} gutterBottom>
                    Crea
                  </Typography>
                  <Typography variant="body1">
                    Diseña tus propias encuestas y recopila datos valiosos para tus proyectos, investigaciones o necesidades personales.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
  )
}

export default CreateNow