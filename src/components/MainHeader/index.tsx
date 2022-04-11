//**O hook UseMemo serve para decorar um VALOR que e é disparado automaticamente quando o mesmo é alterado | ESTRUTURA: useMemo(() => {}, []);  */
//**O hook  UseCallback serve para decorar a FUNÇÃO e é disparado automaticamente quando esta é alterada */

import React, {useMemo, useState}from "react";
import emojis from "../../utils/emojis";
import { useTheme } from "../hooks/theme";
import { Toggle } from "../Toggle";

import {     
    PrincipalContainer,
    Profile,
    Welcome,
    UserName,    
} from "./style";

export const MainHeader: React.FC = () => {
    const { toggleTheme, theme} = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length); //Math.floor = cria valores aleatórios | Math.random = arredonda valores
        return emojis[indice];
    }, []);

    return (
        <PrincipalContainer>        
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}                
            />            

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Jhonatan Martins</UserName>
            </Profile>

        </PrincipalContainer>
    );
}

