import axios from "axios";

const PLACES_BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const getCitiesData = async (inputValue) => {
    try {
        const {
            data: { data },
        } = await axios(PLACES_BASE_URL, {
            params: {
                minPopulation: "100000",
                namePrefix: inputValue,
            },
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_GEODB_API_KEY,
                "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getCurrencyConvert = async (codeFromCurrency, codeToCurrency) => {
    try {
        const { data } = await axios(
            `https://v6.exchangerate-api.com/v6/${
                import.meta.env.VITE_EXCHANGERATE_API_KEY
            }/pair/${codeFromCurrency}/${codeToCurrency}`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getCurrenWeatherData = async (coords) => {
    try {
        const { data } = await axios(
            `${WEATHER_BASE_URL}weather?lat=${coords.lat}&lon=${
                coords.lon
            }&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
