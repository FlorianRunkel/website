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
    fontFamily: [
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontSize: '6rem', fontWeight: 900, lineHeight: 1 },
    h2: { fontSize: '2.5rem', fontWeight: 700 },
    // Definiere weitere Typografie-Varianten, falls nötig
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