import React, { useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  // Create Material UI theme that integrates with our CSS custom properties
  const muiTheme = useMemo(() => createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light',
      primary: {
        main: 'hsl(217, 91%, 60%)',
      },
      background: {
        default: theme === 'dark' ? 'hsl(222.2, 84%, 4.9%)' : 'hsl(0, 0%, 100%)',
        paper: theme === 'dark' ? 'hsl(222.2, 84%, 4.9%)' : 'hsl(0, 0%, 100%)',
      },
      text: {
        primary: theme === 'dark' ? 'hsl(210, 40%, 98%)' : 'hsl(222.2, 47.4%, 11.2%)',
        secondary: theme === 'dark' ? 'hsl(215, 20.2%, 65.1%)' : 'hsl(215.4, 16.3%, 46.9%)',
      },
    },
    components: {
      // Ensure Material UI components don't interfere with SENTRUM FAB
      MuiModal: {
        styleOverrides: {
          root: {
            zIndex: 1300, // Lower than SENTRUM FAB's 9999
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          root: {
            zIndex: 1200, // Lower than SENTRUM FAB's 9999
          },
        },
      },
    },
  }), [theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Layout>{children}</Layout>
    </NextThemeProvider>
  );
};

export default LayoutWrapper;