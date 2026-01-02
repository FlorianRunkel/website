// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Schwarz
    },
    secondary: {
      main: '#FFFFFF', // Weiß
    },
    grey: {
        300: '#aaaaaa', // Hellgrau für Trenner/Text
    }
  },
  typography: {
    fontFamily: ['Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 900,
      lineHeight: 1,
      fontSize: '3rem', // Mobile default
      '@media (min-width:600px)': { fontSize: '4.5rem' }, // sm+
      '@media (min-width:900px)': { fontSize: '6rem' }, // md+
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.5rem', // Mobile default
      '@media (min-width:600px)': { fontSize: '2rem' }, // sm+
      '@media (min-width:900px)': { fontSize: '2.5rem' }, // md+
    },
    body1: {
      fontSize: '1rem',
      '@media (min-width:600px)': { fontSize: '1.05rem' },
      '@media (min-width:900px)': { fontSize: '1.1rem' },
    },
  },
  breakpoints: {
    values: {
      xs: 0,      // Mobile Phones
      sm: 600,    // Tablets (iPad portrait)
      md: 900,    // Tablets (iPad landscape) / Small Laptops
      lg: 1200,   // Laptops / Desktops
      xl: 1536,   // Large Desktops
    },
  },
});

export default theme;