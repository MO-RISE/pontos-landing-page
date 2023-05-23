import React from 'react';
import { Box } from '@mui/material';
import FooterComponent from './footer';
import NavbarComponent from './navbar';

const LayoutComponent = ({ children }) => {
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <NavbarComponent />
            {children}
            <FooterComponent />
        </Box>
    );
};

export default LayoutComponent;