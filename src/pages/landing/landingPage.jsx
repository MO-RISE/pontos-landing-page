import LayoutComponent from '../../components/layout';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { Box, Typography, Stack, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import theme from '../../theme';
import ferryImage from './ferry-2.jpg';
import pontosDiagram from './pontos-diagram-simple-optimized.svg'

function LandingPage() {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <LayoutComponent>
                <Box
                    sx={{
                        backgroundImage: `url(${ferryImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    <Box
                        sx={{
                            width: isSmallScreen ? '50vw' : '70vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            mx: '5vw',
                            my: isSmallScreen ? '10vh' : '20vh',
                            p: isSmallScreen ? 4 : 0,
                            boxSizing: 'border-box',
                        }}
                    >
                        <Typography sx={{
                            fontFamily: "PressStart",
                            color: theme.palette.primary.main,
                            fontSize: isSmallScreen ? '3rem' : '6rem',
                        }}>
                            PONTOS
                        </Typography>
                        <Typography
                            variant="button"
                            align="left"
                            sx={{
                                fontFamily: "PressStart",
                                color: theme.palette.primary.main,
                                fontSize: isSmallScreen ? '0.8rem' : '1rem',
                            }}
                        >
                            An open datahub for accessing real-time and historic operational
                            data from ships to promote research, innovation, and product
                            development.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,

                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={2}>
                            <Box sx={{ position: 'relative', width: isSmallScreen ? '100%' : '40%' }}>
                                <img src={pontosDiagram} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                            <Box sx={{ width: isSmallScreen ? '100%' : '60%', padding: 2 }}>
                                <Typography variant="h5" component="div" sx={{ color: theme.palette.primary.contrastText, mb: 4, fontFamily: 'PoppinsBold' }}>
                                    Participating ship owners make the real-time and historic operational data of their ships accessible to you, openly, through PONTOS.
                                </Typography>
                                <Typography variant="body1" component="div" sx={{ color: theme.palette.primary.contrastText }}>
                                    We encourage you to use this data for research, innovation, and product development.
                                    <List sx={{ color: theme.palette.primary.contrastText }}>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'rgba(255, 0, 0, 1)',
                                            }}>
                                                <Typography sx={{ fontSize: '3rem' }}>🕵️‍♀️ </Typography>
                                            </ListItemIcon>
                                            <ListItemText primary="Discover new insights about marine transportation." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'rgba(255, 0, 0, 1)',
                                            }}>
                                                <Typography sx={{ fontSize: '3rem' }}>🛠️ </Typography>
                                            </ListItemIcon>
                                            <ListItemText primary="Develop new analysis techniques." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'rgba(255, 0, 0, 1)',
                                            }}>
                                                <Typography sx={{ fontSize: '3rem' }}>🚀 </Typography>
                                            </ListItemIcon>
                                            <ListItemText primary="Create new products and services." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'rgba(255, 0, 0, 1)',
                                            }}>
                                                <Typography sx={{ fontSize: '3rem' }}>🚢 </Typography>
                                            </ListItemIcon>

                                            <ListItemText primary="Help the maritime industry become greener, safer, and more efficient!" />
                                        </ListItem>
                                    </List>
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </LayoutComponent>
        </ThemeProvider>
    );
}

export default LandingPage;
