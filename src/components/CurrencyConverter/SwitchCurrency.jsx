import { Button, Grid } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const SwitchCurrency = (props) => {
    const { formCurrency, setFromCurrency, toCurrency, setToCurrency } = props;
    const handleClick = () => {
        setFromCurrency(toCurrency);
        setToCurrency(formCurrency);
    };
    return (
        <Grid item xs={12} md='auto'>
            <Button
                onClick={handleClick}
                sx={{
                    borderRadius: 1,
                    height: '100%',
                }}
            >
                <CompareArrowsIcon />
            </Button>
        </Grid>
    );
};

export default SwitchCurrency;
