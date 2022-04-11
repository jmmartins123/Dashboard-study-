import styled, { css } from "styled-components";

interface IContainerPRops{
    menuIsOpen: boolean;
}

interface IThemeFooterProps{
    menuIsOpen: boolean;
}

const Container = styled.div<IContainerPRops>`
    grid-area: AS;

    background: ${props => props.theme.colors.secondary};   

    padding: 1.2rem 1.5rem;

    border-right: 1px solid ${props => props.theme.colors.gray};
    
    position: relative;       

    @media(max-width: 600px){
        padding-left: 0.47rem;
        position: fixed;
        z-index: 2;
        width: 12rem;  

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow-y: hidden;

       ${props => !props.menuIsOpen && css`
        border: none;
        border-bottom: 1px solid ${props => props.theme.colors.gray};
       `};    
    }    
`;

//O menu recebe uma propriedade onde quando estiver aberto ocupará 
// 100vh e para isso, é necessário passar essa propriedade para funcionar perfeitamente.

const Header = styled.header `
    display: flex;
    align-items: center;   
`;

const LogoImg = styled.img`
    width: 2rem;
    height: 2rem;

    @media(max-width: 600px){
       display: none;
    }
`;

const Title = styled.h3`
    color: ${props => props.theme.colors.white};

    padding-left: 1rem;

    @media(max-width: 600px){
       display: none;
    }
`;

const MenuContainer = styled.nav `
    margin-top: 3.5rem;         

    display: flex;
    flex-direction: column; 
    gap: 1rem;

    > a{        
        text-decoration: none;
    } 

    @media(max-width: 600px){
       gap: 4rem;
    }
`;

const MenuItemLink = styled.a `
    color: ${props => props.theme.colors.info};

    text-decoration: none;
    
    display: flex;
    align-items: center;
    
    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }

    > svg{
        font-size: 1.2rem;
        margin-right: 0.8rem;
    }
`;

const MenuItemButton= styled.button `
    color: ${props => props.theme.colors.info};
    background: transparent;

    text-decoration: none;

    font-size: 1rem;
    
    display: flex;
    align-items: center;
    
    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }

    > svg{
        font-size: 1.2rem;
        margin-right: 0.8rem;
    }
`;

const ToggleMenu = styled.button`
    width: 2.5rem;
    height: 2.5rem;

    border-radius: 0.47rem;
    font-size: 1.37rem;

    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity 0.3s;

    :hover{
        opacity: 0.7;
    }

    display: none;   

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ToggleFotter = styled.footer<IThemeFooterProps>`
    display: none;
    position: absolute;
    bottom:2rem;
    left: 1.5rem;

    @media(max-width: 470px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;

export {
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,  
    ToggleFotter  
}