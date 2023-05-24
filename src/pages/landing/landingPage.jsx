import LayoutComponent from '../../components/layout';
import { Divider, ThemeProvider, useMediaQuery } from '@mui/material';
import { Box, Typography, Grid, Link, Container } from '@mui/material';
import theme from '../../theme';
import ferryImage from './ferry-2.jpg';
import pontosDiagram from './pontos-diagram-simple-optimized.svg'

import cetasolLogo from './cetasol-logo.webp'
import blueflowLogo from './blueflow-logo.jpg'
import färjerederietLogo from './färjerederiet-logo.jpg'
import ssrsLogo from './ssrs-logo.png'
import forseaLogo from './forsea-logo.png'
import öckeröLogo from './öckerö-logo.png'
import meriauraLogo from './meriaura-logo.png'

const PartnersComponent = () => {
    const partnersInfo = [
        { name: 'Trafikverket Färjerederiet', logo: färjerederietLogo, website: 'https://www.trafikverket.se/farjerederiet' },
        { name: 'Blueflow Energy Management', logo: blueflowLogo, website: 'https://www.blueflow.se' },
        { name: 'Cetasol', logo: cetasolLogo, website: 'https://www.cetasol.com' },
        { name: 'Meriaura Group', logo: meriauraLogo, website: 'https://www.meriaura.fi' },
        { name: 'Sjöräddningssällskapet', logo: ssrsLogo, website: 'https://www.sjoraddning.se/' },
        { name: "ForSea Ferries", logo: forseaLogo, website: 'https://www.forseaferries.com/' },
        { name: "Öckerö kommun", logo: öckeröLogo, website: 'https://www.ockero.se/' },
        { name: "Havstens Fiskelag" },
        { name: "Väderö Fisk" }
    ];

    return (
        <Box sx={{ backgroundColor: 'white', padding: 5 }}>
            <Container>
                <Typography variant="h3" component="div" align="center" sx={{ color: theme.palette.primary.contrastText, mb: 4, fontFamily: 'PoppinsBold' }}>
                    Partners
                </Typography>
                <Grid container spacing={5} justifyContent="center" alignItems="center">
                    {partnersInfo.map((partner) => (
                        <Grid item xs={12} sm={6} md={3} key={partner.name}>
                            {partner.logo && partner.website ? (
                                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                                    />
                                </Link>
                            ) : (
                                <Typography variant="h4" align="center">
                                    {partner.name}
                                </Typography>
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

const ActionsComponent = () => {
    const actions = [
        { emoji: '🕵️‍♀️', text: 'Discover new insights.' },
        { emoji: '🤖', text: 'Explore new analyses and techniques.' },
        { emoji: '🚀', text: 'Develop new products and services.' },
        { emoji: '🚢', text: 'Make ships greener, safer, and more efficient!' },
    ];

    return (
        <Box sx={{ backgroundColor: 'white', padding: 5 }}>
            <Container>
                <Grid container spacing={5} justifyContent="center" alignItems="center">
                    {actions.map((action) => (
                        <Grid item xs={12} sm={6} md={3} key={action.name}>
                            <Box
                                sx={{
                                    padding: 5,
                                    border: '1px solid black',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100px',
                                }}
                            >
                                <Typography sx={{ fontSize: '3rem' }} align="center">
                                    {action.emoji}
                                </Typography>
                                <Typography variant="body1" align="center">
                                    {action.text}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

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

                        }}>PONTOS</Typography>
                        <Typography
                            variant="button"
                            align="left"
                            sx={{
                                fontFamily: 'PoppinsBold',
                                color: theme.palette.primary.main,
                                fontSize: isSmallScreen ? '1rem' : '1.5rem',
                                display: 'inline-block',
                                'span': {
                                    padding: '.25em 0',
                                    backgroundColor: theme.palette.secondary.main
                                }
                            }}
                        >
                            An open datahub of ship operational
                            data to promote research, innovation, and product
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

                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={pontosDiagram} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography variant="h5" component="div" sx={{ color: theme.palette.primary.contrastText, mb: 4, fontFamily: 'PoppinsBold' }}>
                                Partners make the operational data of their ships accessible to you, openly and in real-time, through PONTOS.
                            </Typography>
                        </Grid>
                    </Grid>



                </Box>
                <Divider />
                <Box sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,

                }}>
                    <ActionsComponent />
                </Box>
                <Divider />
                <Box sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,

                }}>
                    <PartnersComponent />
                </Box>
            </LayoutComponent>
        </ThemeProvider>
    );
}

export default LandingPage;
