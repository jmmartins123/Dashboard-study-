import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;

    background: ${props => props.theme.colors.primary};

    color: ${props => props.theme.colors.white};    

    padding: 1.5rem;

    height: calc(100vh - 70px);
    overflow-x: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 0.8rem;        
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 0.8rem;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.tertiary};       
    }
`;