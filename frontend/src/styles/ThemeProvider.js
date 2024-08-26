// src/styles/ThemeProvider.js

import React from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ThemeProvider = ({ children }) => (
  <MUIThemeProvider theme={darkTheme}>
    <CssBaseline />
    {children}
  </MUIThemeProvider>
);

export default ThemeProvider;
