import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'PoppinsMedium',
    },
    palette: {
        primary: {
            main: '#ffffff',
            dark: '#f0f0f9',
        },
        secondary: {
            main: '#3cb7d6',
        },
        info: {
            main: '#7b1fa2',
        },
        error: {
            main: '#d32f2f',
        },
    },
});

export default theme;
