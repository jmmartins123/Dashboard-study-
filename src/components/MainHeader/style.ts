import styled from "styled-components";

//***background-color: ${props => props.theme.colors.primary} = desinstruturação; Atribui uma nova propriedade ao meu styled DefaultTheme no styled components e repassei como módulo externo.
//***As propriedades de tema estão disponíveis por causa do ThemeProvider declarado no App.tsx

const PrincipalContainer = styled.div`
    grid-area: MH;
    
    background: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;
    
    border-bottom: 1px solid ${props => props.theme.colors.gray}; 
`;

const Profile = styled.div`    
    color: ${props => props.theme.colors.white};
`;

const Welcome = styled.h3`
`;

const UserName = styled.span`
`;


export {
    PrincipalContainer,  
    Profile,
    Welcome,  
    UserName,    
}