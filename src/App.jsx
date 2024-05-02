import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header/Header';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import { useEffect, useState } from 'react';
import { getCurrenWeatherData, getDailyWeatherData, getPlacesData } from './utils/fetchData';
import Weather from './components/Weather/Weather';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {

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
