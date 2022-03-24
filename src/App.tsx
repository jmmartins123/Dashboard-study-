import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { GlobalStyled } from "./styles/global";
import dark from "./styles/themes/dark";

export const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>                  
            <Layout />
            <GlobalStyled />
        </ThemeProvider>
    );
}