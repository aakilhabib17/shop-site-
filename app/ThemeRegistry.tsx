'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import EmotionCacheProvider from './EmotionCacheProvider';
import theme from './theme';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    // <EmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    // </EmotionCacheProvider>
  );
}
