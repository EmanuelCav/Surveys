import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material'
import HowToVoteIcon from '@mui/icons-material/HowToVote';

const Participate = () => {
    return (
        <Grid item xs={12} md={6}>
            <Card sx={{
                textAlign: 'center', padding: '1rem', height: '100%', '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.03)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                },
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
                        <HowToVoteIcon sx={{ fontSize: 30 }} />
                    </Avatar>
                    <Typography variant="h5" fontWeight={500} gutterBottom>
                        Participa
                    </Typography>
                    <Typography variant="body1">
                        Responde encuestas y contribuye con tu opinión para ayudar a construir resultados significativos.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Participate