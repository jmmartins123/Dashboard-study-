import { StringDecoder } from "string_decoder";
import styled from "styled-components";

interface IColorProps{
    color: string;
}

const Container = styled.div`
    width: 100%;     
    height: 360px;         
    
    display: flex;
    flex-direction: column;    

    background-color: ${ props => props.theme.colors.tertiary};
    color: ${ props => props.theme.colors.white};

    margin: 0.6rem 0;
    padding: 1.87rem 1.25rem;

    border-radius: 0.5rem;

    overflow-x: hidden;
`;

const Title = styled.h2`
    margin-bottom: 1.25rem;

    padding-left: 1.1rem;  
        
`;

const ChartContainer = styled.div`    
    flex: 1;  
    
    @media(max-width: 420px){        
        width: 100%;
    }
`;
            
const Header = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between; 
    
    @media(max-width: 770px){
        display: block;
        width: 100%;
    }
        
`;

const LegendContainer = styled.ul`
    list-style: none; 
    
    display: flex;
    gap: 1.1rem;

    margin-right: 2rem;

    @media(max-width: 770px){
        margin-bottom: 1rem;
    }
   
`;

const LegendItem = styled.li`   
    display: flex;
    align-items: center;
    
    gap: 0.7rem;
`;

const Card = styled.div<IColorProps>`
    background-color: ${props => props.color};

    padding: 1rem;

    border-radius: 0.3rem;

    @media(max-width: 1280px){
        margin-left: 1rem;
        margin-right: 0.7rem;
    }

`;

const Span = styled.span``;




export {
    Container,
    Title,
    ChartContainer,
    Header,
    LegendContainer,
    LegendItem,
    Card,
    Span
}