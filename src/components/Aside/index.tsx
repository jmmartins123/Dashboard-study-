import React from "react";
import logoImg from '../../assets/logo.svg';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink
 } from "./style";

export const Aside: React.FC = () => {
    return (
        <Container>        
            <Header>
                <LogoImg src={logoImg} alt='Logo Minha Carteira' />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='#'>
                    <MdDashboard />
                    Dasboard
                </MenuItemLink>  

                <MenuItemLink href='#'>
                    <MdArrowDownward />
                    Entradas
                </MenuItemLink>  

                <MenuItemLink href='#'>
                    <MdArrowUpward />
                    Saídas
                </MenuItemLink>  

                <MenuItemLink href='#'>
                    <MdExitToApp />
                    Sair
                </MenuItemLink>  
            </MenuContainer>
        </Container>
    );
}