import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme, alpha } from '@mui/material/styles';

const NavbarComponent = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    const theme = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const scrollThreshold = 70; // Adjust this threshold as needed

            if (scrollTop > scrollThreshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <AppBar
            position="fixed"
            elevation={isScrolled ? 4 : 0}
            sx={{
                backgroundColor: isScrolled ? theme.palette.background.default : 'transparent',
                transition: theme.transitions.create('background-color', { duration: theme.transitions.duration.short }),
                boxShadow: 'none',
            }}
        >
            <Toolbar>
                <Typography variant="h4" sx={{ fontFamily: "PressStart", flexGrow: 1, color: theme.palette.secondary.main }}>
                    {isScrolled ? 'PONTOS' : ''}
                </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleMenu}

                    sx={{ display: { xs: 'block', sm: 'none', color: isScrolled ? 'black' : theme.palette.primary.main } }}
                >
                    <MenuIcon />
                </IconButton>
                <List
                    component="nav"
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        gap: 2,
                        '& a': {
                            textDecoration: 'none',
                            color: isScrolled ? 'black' : theme.palette.primary.main,
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                    }}
                >
                    <ListItemButton component="a" href="#">
                        <ListItemText primary="Get Started" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#">
                        <ListItemText primary="Partners" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#">
                        <ListItemText primary="Events" />
                    </ListItemButton>
                </List>
                <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuClose}>
                    <List sx={{ width: 250 }} onClick={handleMenuClose}>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Get Started" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Partners" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Events" />
                        </ListItemButton>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>

    );
};

export default NavbarComponent;
