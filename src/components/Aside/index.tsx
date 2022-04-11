import React, { useState} from "react";
import logoImg from '../../assets/logo.svg';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md'

import { useAuth } from '../hooks/auth'
import { useTheme } from '../hooks/theme'
import { Toggle } from "../Toggle";

import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    ToggleFotter
 } from "./style";

export const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setToggleMenuIsOpen(!toggleMenuIsOpen);
    }
    
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpen}>        
            <Header>
                <ToggleMenu 
                    onClick={handleMenuToggle}
                >
                    { toggleMenuIsOpen ? <MdClose /> : <MdMenu />}
                </ToggleMenu>

                <LogoImg src={logoImg} alt='Logo Minha Carteira' />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>                
                    <MenuItemLink href='/'>
                        <MdDashboard />
                        Dasboard
                    </MenuItemLink>  

                    <MenuItemLink href='/list/entry-balance'>
                        <MdArrowUpward />
                        Entradas
                    </MenuItemLink>  

                    <MenuItemLink href='/list/exit-balance'>
                        <MdArrowDownward />
                        Saídas
                    </MenuItemLink>  

                    <MenuItemButton 
                        onClick = {signOut}
                    >
                        <MdExitToApp />
                        Sair
                    </MenuItemButton>  
            </MenuContainer>

            <ToggleFotter menuIsOpen={toggleMenuIsOpen}>
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}                
                />           
            </ToggleFotter> 
        </Container>
    );
}
