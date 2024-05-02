import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { AsyncPaginate } from 'react-select-async-paginate';
import { getCitiesData } from '../../utils/fetchData';

const Header = (props) => {
    const { search, setSearch, setCoords } = props;

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        const [lat, lon] = searchData.value.split(' ');
        setCoords({ lat: lat, lon: lon });
    };

    const loadOptions = (input) => {
        return getCitiesData(input).then((data) => {
            return {
                options: data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}`,
                    };
                }),
            };
        });
    };

    return (
        <AppBar position='relative'>
            <Toolbar sx={{ backgroundColor: '#003C71' }}>
                <Container maxWidth='xl' sx={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                    <Typography variant='h3' align='center' gutterBottom>
                        The world is yours to explore
                    </Typography>
                    <Box sx={{ color: '#333', backgroundColor: '#fff', maxWidth: 'md', margin: '0 auto' }}>
                        <AsyncPaginate
                            placeholder='Search for city...'
                            debounceTimeout={600}
                            value={search}
                            onChange={handleOnChange}
                            loadOptions={loadOptions}
                        />
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
