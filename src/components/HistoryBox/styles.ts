import styled from "styled-components";

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
`;

const Title = styled.h2`
    margin-bottom: 1.25rem;

    padding-left: 1.1rem;  
`;

const ChartContainer = styled.div`    
    flex: 1;        
`;
            
const Header = styled.header`
    display: flex;
    justify-content: space-between;    
`;

const LegendContainer = styled.ul`
    list-style: none;
`;

const LegendItem = styled.li`   

`;



export {
    Container,
    Title,
    ChartContainer,
    Header,
    LegendContainer,
    LegendItem
}