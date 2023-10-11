import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" borderTop= '3px solid #FF2625' bgcolor="rgba(16, 16, 16, 0.975)">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '300px', height: '80px' }} />
    </Stack>
    <Typography color="white" variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">LIKE</Typography>
  </Box>
);

export default Footer;