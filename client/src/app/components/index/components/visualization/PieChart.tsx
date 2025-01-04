import { Box, Card, CardContent, Grid, Typography } from "@mui/material"

import { IChart } from "../../../../interfaces/General";

export const data: IChart[] = [
    { label: 'Completadas', value: 70, color: '#f64' },
    { label: 'Pendientes', value: 30, color: '#fb9' },
];

const PieChart = () => {
    return (
        <Grid item xs={12} md={6}>
            <Card
                sx={{
                    height: 320,
                    '&:hover': {
                        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                        transform: 'scale(1.03)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    },
                }}
            >
                <CardContent>
                    <Typography variant="h6" fontWeight={500} gutterBottom>
                        Progreso
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            background: `conic-gradient(
                    ${data[0].color} 0% ${data[0].value}%,
                    ${data[1].color} ${data[0].value}% 100%
                  )`,
                            margin: '0 auto',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                transition: 'transform 0.3s ease',
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ position: 'absolute', color: '#fff' }}
                        >
                            {data[0].value}%
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                        {data.map((item, index) => (
                            <Box key={index} sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        backgroundColor: item.color,
                                        borderRadius: '50%',
                                        display: 'inline-block',
                                    }}
                                />
                                <Typography variant="body2" sx={{ marginLeft: '0.5rem', display: 'inline' }}>
                                    {item.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PieChart