import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { GlobalStyled } from "./styles/global";
import dark from "./styles/themes/dark";

export const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>                          
            <Routes />
            <GlobalStyled />
        </ThemeProvider>
    );
}