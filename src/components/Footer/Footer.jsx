import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#003C71' }}>
            <Typography variant='h6' align='center' color='#fff' gutterBottom>
                Lâm Vĩnh Phát - 110121081
            </Typography>
            <Typography variant='subtitle1' align='center' color='#fff'>
                Dự án nhằm mục đích phục vụ học tập, không mang tính thương mại
            </Typography>
        </Box>
    );
};

export default Footer;
