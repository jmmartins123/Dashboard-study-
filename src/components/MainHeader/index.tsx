//**O hook UseMemo serve para decorar um VALOR que e é disparado automaticamente quando o mesmo é alterado | ESTRUTURA: useMemo(() => {}, []);  */
//**O hook  UseCallback serve para decorar a FUNÇÃO e é disparado automaticamente quando esta é alterada */

import React, {useMemo}from "react";
import emojis from "../../utils/emojis";
import { Toggle } from "../Toggle";

import {     
    PrincipalContainer,
    Profile,
    Welcome,
    UserName
} from "./style";

export const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length); //Math.floor = arredonda valores | Math.random = cria valores aleatórios
        return emojis[indice];
    }, []);

    return (
        <PrincipalContainer>        
            <Toggle />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Jhonatan Martins</UserName>
            </Profile>

        </PrincipalContainer>
    );
}

