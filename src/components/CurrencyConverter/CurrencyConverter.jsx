import { Box, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InputAmount from './InputAmount';
import SwitchCurrency from './SwitchCurrency';
import SelectCountry from './SelectCountry';
import { getCurrencyConvert } from '../../utils/fetchData';

const CurrencyConverter = () => {
    const [formCurrency, setFromCurrency] = useState('USD United States');
    const [toCurrency, setToCurrency] = useState('VND Vietnam');

    const [fistAmount, setFistAmount] = useState(0);
    const [resultCurrency, setResultCurrency] = useState(0);

    const codeFromCurrency = formCurrency.split(' ')[0];
    const codeToCurrency = toCurrency.split(' ')[0];

    useEffect(() => {
        getCurrencyConvert(codeFromCurrency, codeToCurrency).then((data) => {
            setResultCurrency(data.conversion_rate);
        });
    }, [fistAmount, formCurrency, toCurrency]);

    return (
        <Container maxWidth='md' sx={{ marginTop: '2rem', background: '#f7f7f7', borderRadius: 2 }}>
            <Grid container spacing={2}>
                <InputAmount fistAmount={fistAmount} setFistAmount={setFistAmount} />
                <SelectCountry value={formCurrency} setValue={setFromCurrency} label='From' />
                <SwitchCurrency
                    formCurrency={formCurrency}
                    setFromCurrency={setFromCurrency}
                    toCurrency={toCurrency}
                    setToCurrency={setToCurrency}
                />
                <SelectCountry value={toCurrency} setValue={setToCurrency} label='To' />
            </Grid>
            <Box
                sx={{
                    textAlign: 'left',
                    margin: '1rem',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    paddingBottom: '1rem',
                }}
            >
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    {fistAmount} {formCurrency}
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    =
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    {resultCurrency * fistAmount} {toCurrency}
                </Typography>
            </Box>
        </Container>
    );
};

export default CurrencyConverter;
