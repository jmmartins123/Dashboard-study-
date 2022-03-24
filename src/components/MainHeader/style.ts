import styled from "styled-components";

//***background-color: ${props => props.theme.colors.primary} = desinstruturação; Atribui uma nova propriedade ao meu styled DefaultTheme no styled components e repassei como módulo externo.


export const Container = styled.div`
    grid-area: MH;

    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};
`;