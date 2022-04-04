import styled from "styled-components";

const Container = styled.div`
    grid-area: AS;

    background: ${props => props.theme.colors.secondary};   

    padding: 1.2rem 1.5rem;

    border-right: 1px solid ${props => props.theme.colors.gray};    
`;

const Header = styled.header `
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 2rem;
    height: 2rem;
`;

const Title = styled.h3`
    color: ${props => props.theme.colors.white};

    padding-left: 1rem;
`;

const MenuContainer = styled.nav `
    margin-top: 3.5rem;         

    display: flex;
    flex-direction: column; 
    gap: 1rem;

    > a{        
        text-decoration: none;
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


export {
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink
}