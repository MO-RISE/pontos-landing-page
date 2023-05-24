import React from 'react';
import { Box, Container, Stack, Typography, useTheme, Grid, useMediaQuery, Link } from '@mui/material';
import riseLogo from './rise-logo-white.png';
import trafikverketLogo from './trafikverket-logo-white.png';

const FooterComponent = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.light, padding: 5 }}>
            <Container>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 3, sm: 3 }}
                    justifyContent={isSmallScreen ? 'left' : 'center'}
                    alignItems={isSmallScreen ? 'left' : 'center'}
                    sx={{ color: theme.palette.primary.main }}
                >
                    <Box
                        sx={{
                            borderRight: isSmallScreen ? '' : '1px solid',
                            borderBottom: isSmallScreen ? '1px solid' : '',
                            paddingRight: isSmallScreen ? 0 : 3,
                            paddingBottom: isSmallScreen ? 3 : 0,
                            borderColor: 'primary.main',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'PressStart',
                                color: theme.palette.primary.main,
                                fontSize: '3rem',
                            }}
                        >
                            PONTOS
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: isSmallScreen ? '100%' : '30%',
                            borderRight: isSmallScreen ? '' : '1px solid',
                            borderBottom: isSmallScreen ? '1px solid' : '',
                            paddingRight: isSmallScreen ? 0 : 3,
                            paddingBottom: isSmallScreen ? 3 : 0,
                            borderColor: 'primary.main',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="caption" sx={{ mx: 0 }}>
                                    Driven by
                                </Typography>
                                <Link href="https://www.ri.se" target="_blank" rel="noopener noreferrer" underline="hover" variant="body2">
                                    <img src={riseLogo} alt="logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" sx={{ mx: 0 }}>
                                    Financed by
                                </Typography>
                                <Link href="https://www.trafikverket.se" target="_blank" rel="noopener noreferrer" underline="hover" variant="body2">
                                    <img src={trafikverketLogo} alt="logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: isSmallScreen ? 'center' : 'left',
                            alignItems: isSmallScreen ? 'center' : 'left',
                        }}
                    >
                        <Typography variant="body2">
                            <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer" underline="hover" variant="body2">
                                Contact us
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer" underline="hover" variant="body2">
                                FAQ
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer" underline="hover" variant="body2">
                                License
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="https://github.com/mo-rise/pontos-hub" target="_blank" rel="noopener noreferrer" underline="hover" variant="body2">
                                Github
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" underline="hover" variant="body2">
                                Linkedin
                            </Link>
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default FooterComponent;
