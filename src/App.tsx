import React from "react";

import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { GlobalStyled } from "./styles/global";
import { useTheme } from './components/hooks/theme';

export const App: React.FC = () => {
    const { theme } = useTheme();
    
    return(
        <ThemeProvider theme={theme}>                          
            <Routes />
            <GlobalStyled />
        </ThemeProvider>
    );
}