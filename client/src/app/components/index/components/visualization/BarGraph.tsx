import { Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material'

import { IVisualization } from '../../../../interfaces/General';

const data: IVisualization[] = [
    { label: 'Opción A', value: 70 },
    { label: 'Opción B', value: 50 },
    { label: 'Opción C', value: 30 },
    { label: 'Opción D', value: 90 },
];

const BarGraph = () => {
    return (
        <Grid item xs={12} md={6}>
            <Card
                sx={{
                    height: 320,
                    '&:hover': {
                        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                        transform: 'scale(1.03)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    },
                }}
            >
                <CardContent>
                    <Typography variant="h6" fontWeight={500} gutterBottom>
                        Respuestas
                    </Typography>
                    {data.map((item, index) => (
                        <Box key={index} sx={{ marginBottom: '1rem' }}>
                            <Typography variant="body1" paragraph>{item.label}</Typography>
                            <LinearProgress
                                variant="determinate"
                                color='warning'
                                value={item.value}
                                sx={{
                                    height: 10,
                                    borderRadius: 5,
                                    '&:hover': {
                                        backgroundColor: '#ddd',
                                    },
                                    '& .MuiLinearProgress-bar': {
                                        transition: 'background-color 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#f64',
                                        },
                                    },
                                }}
                            />
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Grid>
    )
}

export default BarGraph