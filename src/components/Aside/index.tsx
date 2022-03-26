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
import { Link } from "react-router-dom";

export const Aside: React.FC = () => {
    return (
        <Container>        
            <Header>
                <LogoImg src={logoImg} alt='Logo Minha Carteira' />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <Link to = '/dashboard'>
                    <MenuItemLink>
                        <MdDashboard />
                        Dasboard
                    </MenuItemLink>  
                </Link>

                <Link to = '/list/entry-balance'>
                    <MenuItemLink>
                        <MdArrowDownward />
                        Entradas
                    </MenuItemLink>  
                </Link>

                <Link to = '/list/exit-balance'>
                    <MenuItemLink>
                        <MdArrowUpward />
                        Saídas
                    </MenuItemLink>  
                </Link>

                <Link to = '/list/exit-balance'>
                    <MenuItemLink>
                        <MdExitToApp />
                        Sair
                    </MenuItemLink>  
                </Link>
            </MenuContainer>
        </Container>
    );
}