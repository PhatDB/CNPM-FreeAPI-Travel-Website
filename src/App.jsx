import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header/Header";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import { useEffect, useState } from "react";
import {
    getCurrenWeatherData,
    getDailyWeatherData,
    getPlacesData,
} from "./utils/fetchData";
import Weather from "./components/Weather/Weather";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [search, setSearch] = useState("");
    const [coords, setCoords] = useState({ lat: 12.24507, lon: 109.19432 });

    const [currenWeather, setCurrenWeather] = useState([]);
    const [dailyWeather, setDailyWeather] = useState([]);

    const [places, setPlaces] = useState([]);

    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");

    return (
        <>
            <CssBaseline />
            <Box sx={{ background: "#DEF1FF" }}>
                <Header
                    search={search}
                    setSearch={setSearch}
                    setCoords={setCoords}
                />
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
