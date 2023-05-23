import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';



const FooterComponent = () => {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.light, padding: 16 }}>
            <Container>
                <Typography variant="body2" align="center" color="textSecondary">
                    Footer content here
                </Typography>
            </Container>
        </Box>
    );
};

export default FooterComponent;
