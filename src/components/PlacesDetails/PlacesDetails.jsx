import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Rating, Typography } from '@mui/material';
import styled from '@emotion/styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const HoverCard = styled(Card)({
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const PlacesDetails = ({ data }) => {
    return (
        <HoverCard sx={{ minHeight: 710 }}>
            <CardMedia
                sx={{ height: 350 }}
                image={
                    data.photo
                        ? data.photo.images.large.url
                        : 'https://kinhdoanh365.up.seesaa.net/image/loai-hinh-dich-cu-catering.jpg'
                }
                title={data.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>
                    {data.name}
                </Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Rating size='small' value={Number(data.rating)} readOnly />
                    <Typography variant='subtitle1' fontWeight='600'>
                        Price
                    </Typography>
                    <Typography variant='subtitle1'>{data.price}</Typography>
                    <Typography variant='subtitle1' fontWeight='600'>
                        Price Level
                    </Typography>
                    <Typography gutterBottom variant='subtitle1' color='red'>
                        {data.price_level}
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1' fontWeight='600'>
                        Ranking
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                        {data.ranking}
                    </Typography>
                </Box>
                {data?.awards?.map((award) => (
                    <Box my={1} display='flex' justifyContent='space-between' alignItems='center' key={award}>
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant='subtitle2' color='textSecondary'>
                            {award.display_name}
                        </Typography>
                    </Box>
                ))}
                {data?.cuisine?.map(({ name }) => (
                    <Chip key={name} size='small' label={name} sx={{ margin: '5px 5px 5px 0' }} />
                ))}
                {data?.address && (
                    <Typography
                        gutterBottom
                        variant='body2'
                        color='textSecondary'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <LocationOnIcon /> {data.address}
                    </Typography>
                )}
                {data?.phone && (
                    <Typography
                        gutterBottom
                        variant='body2'
                        color='textSecondary'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <PhoneIcon /> {data.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size='small' color='primary' onClick={() => window.open(data.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size='small' color='primary' onClick={() => window.open(data.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </HoverCard>
    );
};

export default PlacesDetails;
