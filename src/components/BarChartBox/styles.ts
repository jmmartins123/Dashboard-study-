import styled from "styled-components";

interface ILegendProps{
    color: string;
}

const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 0.6rem 0;

    background-color: ${props => props.theme.colors.tertiary};

    border-radius: 0.4rem;

    padding: 2rem;
    
    display: flex;

    @media(max-width: 1200px){
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 485px;
    }
`;

const SideLeft = styled.aside`    
    display: flex;
    flex-direction: column;          
`;

const Title = styled.h2`
    margin-bottom: 0.6rem;

    margin-left: 0.2rem;
    margin-bottom: 1.4rem;
   
`;

const SideRight = styled.main`    
    flex: 1;
    width: 1rem;
    min-height: 232px;

    display: flex;
    justify-content: center;

    @media(max-width: 1200px){
        width: 100%;
    }
`;

const LegendContainer = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;
    
    padding-right: 1.2rem;

    height: 10.93rem;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 0.6rem;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 0.8rem;
    }     
    
`;

const Legend = styled.li`
    display: flex;
    align-items: center;

    margin-bottom: 0.7rem;      
`;

const NumberTitle = styled.h4<ILegendProps>`
    background-color: ${props => props.color};

    width: 3rem;
    height: 2.5rem;

    border-radius: 0.31rem;
    line-height: 2.5rem;

    font-size: 0.9rem;
    text-align: center;
`;

const Description = styled.h4`
    margin-left: 0.7rem;
`;



export {
    Container,
    SideLeft,
    Title,
    SideRight,
    LegendContainer,
    Legend,        
    NumberTitle,
    Description
}