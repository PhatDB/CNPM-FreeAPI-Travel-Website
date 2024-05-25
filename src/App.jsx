import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header/Header';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import { useEffect, useState } from 'react';
import { getCurrenWeatherData, getDailyWeatherData, getPlacesData } from './utils/fetchData';
import Weather from './components/Weather/Weather';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
    const [search, setSearch] = useState('');
    const [coords, setCoords] = useState({ lat: 12.24507, lon: 109.19432 });

    const [currenWeather, setCurrenWeather] = useState([]);
    const [dailyWeather, setDailyWeather] = useState([]);

    const [places, setPlaces] = useState([]);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating);
        setFilteredPlaces(filteredPlaces);
    }, [rating]);

    useEffect(() => {
        getCurrenWeatherData(coords).then((data) => {
            setCurrenWeather([data]);
        });
        getDailyWeatherData(coords).then((data) => {
            setDailyWeather(data.list);
        });
    }, [coords]);

    useEffect(() => {
        setIsLoading(true);
        getPlacesData(coords, type).then((data) => {
            setPlaces(data);
            setFilteredPlaces([]);
            setIsLoading(false);
        });
    }, [coords, type]);

    return (
        <>
            <CssBaseline />
            <Box sx={{ background: '#DEF1FF' }}>
                <Header search={search} setSearch={setSearch} setCoords={setCoords} />
                <CurrencyConverter />
                <Weather currenData={currenWeather} dailyData={dailyWeather} />
                <List
                    placesData={filteredPlaces.length ? filteredPlaces : places}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                    isLoading={isLoading}
                />
                <Footer />
            </Box>
        </>
    );
};

export default App;
