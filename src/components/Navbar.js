import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';

import Logo from '../assets/images/Logo.png';



const Navbar = () =>  (
    <Stack
      direction="row"
      justifyContent="space-around" 
      
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent:'none'}} px="20px" >

      <Link to="/">
        <img src={Logo} alt="Logo" style={{
          width: '70px', height: '70px',
          margin: '0 10px'
        }} />
      </Link>

    <Stack 
        direction="row"
        gap ="50px"
        fontSize= "24px"
        
        alignItems="flex-between">
      <Link to="/" style={{
        textDecoration:'none', color:'#45c2f1',
        underline:'hover',
       borderBottom: '3px solid #FF2625'
      }}><b>Home</b></Link>
      <a href="#exercises" style={
        { textDecoration:'none', 
          color: '#45c2f1'
        }
      }><b>Exercise</b></a>
    </Stack>

    </Stack>

  )


export default Navbar;