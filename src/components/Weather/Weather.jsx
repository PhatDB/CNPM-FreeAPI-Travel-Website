import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { style } from './style';

const TIME_DAY = ['6:00', '9:00', '12:00', '15:00', '18:00', '21:00', '24:00'];

const Weather = (props) => {
    const { currenData, dailyData } = props;

    return (
        <>
            <Container maxWidth='md' sx={{ margin: '20px auto 20px auto', display: { xs: 'block', md: 'flex' } }}>
                {currenData.map((currenData, index) => (
                    <Box key={index}>
                        <Card>
                            <Box sx={style.country}>
                                <CardContent>
                                    <Typography sx={style.countryName}>{currenData.name}</Typography>
                                    <Typography sx={style.weatherStatus}>
                                        {currenData.weather[0].description}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    sx={style.cardMedia}
                                    image={`https://openweathermap.org/img/wn/${currenData.weather[0].icon}@2x.png`}
                                />
                            </Box>
                            <Box display='flex'>
                                <CardContent>
                                    <Typography sx={style.temperature}>{Math.round(currenData.main.temp)}°C</Typography>
                                </CardContent>
                                <Box width='100%' padding='10px'>
                                    <Typography>Details</Typography>
                                    <Box sx={style.boxDetail}>
                                        <Typography sx={style.detailLabel}>Feels like:</Typography>
                                        <Typography sx={style.detailValue}>
                                            {Math.round(currenData.main.feels_like)}°C
                                        </Typography>
                                    </Box>
                                    <Box sx={style.boxDetail}>
                                        <Typography sx={style.detailLabel}>Wind:</Typography>
                                        <Typography sx={style.detailValue}>
                                            {Math.round(currenData.wind.speed)} m/s
                                        </Typography>
                                    </Box>
                                    <Box sx={style.boxDetail}>
                                        <Typography sx={style.detailLabel}>Humidity:</Typography>
                                        <Typography sx={style.detailValue}>
                                            {Math.round(currenData.main.humidity)}%
                                        </Typography>
                                    </Box>
                                    <Box sx={style.boxDetail}>
                                        <Typography sx={style.detailLabel}>Pressure:</Typography>
                                        <Typography sx={style.detailValue}>
                                            {Math.round(currenData.main.pressure)}hPa
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                ))}
                <Grid container spacing={2} justifyContent='center'>
                    {dailyData.slice(0, 7).map((dailyData, index) => (
                        <Grid item key={index} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Card
                                sx={{
                                    maxWidth: '120px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '10px',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography align='center'>{TIME_DAY[index]}</Typography>
                                <CardMedia
                                    sx={{ height: '50px', width: '50px' }}
                                    image={`https://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`}
                                />
                                <Typography align='center'>
                                    {Math.round(dailyData.main.temp_min)}°C - {Math.round(dailyData.main.temp_max)}°C{' '}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Weather;
