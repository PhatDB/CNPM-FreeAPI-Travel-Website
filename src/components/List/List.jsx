import { Box, CircularProgress, Container, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { StyledFromControl } from './style';
import PlacesDetails from '../PlacesDetails/PlacesDetails';

const List = (props) => {
    const { placesData, type, setType, rating, setRating, isLoading } = props;
    const placesDataFilter = placesData.filter((item) => 'ranking' in item);
    return (
        <Container maxWidth='xl' sx={{ padding: '2rem' }}>
            {isLoading ? (
                <Box sx={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress size='5rem' />
                </Box>
            ) : (
                <>
                    <Typography variant='h4' align='center'>
                        Restaurents, Hotels & Attractions
                    </Typography>
                    <Box display='flex' justifyContent='center'>
                        <StyledFromControl>
                            <Select value={type} onChange={(e) => setType(e.target.value)}>
                                <MenuItem value='restaurants'>Restaurants</MenuItem>
                                <MenuItem value='hotels'>Hotels</MenuItem>
                                <MenuItem value='attractions'>Attractions</MenuItem>
                            </Select>
                        </StyledFromControl>
                        <StyledFromControl>
                            <InputLabel>Rating</InputLabel>
                            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                                <MenuItem value={''}>All</MenuItem>
                                <MenuItem value={3}>Above 3.0</MenuItem>
                                <MenuItem value={4}>Above 4.0</MenuItem>
                                <MenuItem value={4.5}>Above 4.5</MenuItem>
                            </Select>
                        </StyledFromControl>
                    </Box>
                    <Grid container spacing={3}>
                        {placesDataFilter.map((data, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <PlacesDetails data={data} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default List;
