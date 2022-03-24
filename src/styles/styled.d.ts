import 'styled-components';
//este arquivo serve para subcrever outros arquivos. Ou seja, tornar tupagem de outros arquivos da aplicação globais.
//passar o module para acessar externamente e informar qual a propriedade (styled-components) que receberá uma nova tipagem padronizada manualmente.

declare module 'styled-components'{
    export interface DefaultTheme {       
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
        },
    }
}