import React, { createContext, useState, useContext } from "react";

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/ligth';

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme
}

interface ITheme {
    title: string,
    
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
            
        white: string;
        black: string;
        gray: string;

        sucess:string;
        info: string;
        warning: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@minha-carteira:theme'); // aqui realiza a busca no local storage para verificar o tema selecionado

        if(themeSaved){
            return JSON.parse(themeSaved); //aqui realiza a conversão de texto para json
        } else{
            return dark;
        }
    })   

    const toggleTheme = () => {
        if(theme.title === 'dark'){
            setTheme(light);
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(light)); // aqui guarda as informações do tema como texto
        }else{
            setTheme(dark);
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark)); // aqui guarda as informações do tema como texto
        }
    };

    return (
        <ThemeContext.Provider
            value={{toggleTheme, theme}}
        >
            { children }
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}

export { ThemeProvider, useTheme }