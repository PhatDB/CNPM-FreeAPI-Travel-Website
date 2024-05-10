import { Autocomplete, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SelectCountry = (props) => {
    const { value, setValue, label } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios('https://restcountries.com/v3.1/all');
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const dataFilter = data.filter((item) => 'currencies' in item);
    const dataCountries = dataFilter.map((item) => {
        return `${Object.keys(item.currencies)[0]} ${item.name.common}`;
    });

    const handleOnChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                disableClearable
                value={value}
                onChange={handleOnChange}
                options={dataCountries}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </Grid>
    );
};

export default SelectCountry;
