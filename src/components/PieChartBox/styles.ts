import styled, { keyframes } from 'styled-components';

interface ILegendProps{
    color: string;
}


const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }    
    50%{      
        opacity: 0.3;
    }    
    100%{
        transform: translateX(0);
        opacity: 1;
    }    
`;

const Container = styled.div`
    width: 48%;
    height: 14.25rem;

    margin: 0.6rem 0rem;

    color: ${prosp => prosp.theme.colors.white};
    background-color: ${prosp => prosp.theme.colors.tertiary};

    border-radius: 0.43rem;

    display: flex;

    animation: ${animate} .5s;

    @media(max-width: 770px){
        display: flex;
        width: 100%;
    }

    @media(max-width: 420px){
      padding: 1rem;
      margin-bottom: 0.45rem;
    }
`;

const SideLeft = styled.aside`    
    padding: 1.87rem 1.25rem;

    @media(max-width: 1345px){      
      margin-bottom: 0.45rem;
    }

    @media(max-width: 420px){    
        padding: 0  0.31rem;
    }
`;

const Title = styled.h2`
    margin-bottom: 1.25rem;

    @media(max-width: 1345px){
      margin-top: 1.1rem;
    }    
`;

const LegendContainer = styled.ul`
    list-style: none;
    
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

const SideRigth = styled.main`   
    display: flex;    
    flex: 1;
    justify-content: center;
`;

export { 
    Container,
    SideLeft,
    NumberTitle,
    Title,
    Description,
    LegendContainer,
    Legend,
    SideRigth
}