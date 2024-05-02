import axios from 'axios';

const PLACES_BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getCitiesData = async (inputValue) => {
    try {
        const {
            data: { data },
        } = await axios(PLACES_BASE_URL, {
            params: {
                minPopulation: '100000',
                namePrefix: inputValue,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_GEODB_API_KEY,
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

