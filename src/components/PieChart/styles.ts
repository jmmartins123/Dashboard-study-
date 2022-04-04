import styled from 'styled-components';

interface ILegendProps{
    color: string;
}

const Container = styled.div`
    width: 48%;
    height: 14.25rem;

    margin: 0.6rem 0rem;

    color: ${prosp => prosp.theme.colors.white};
    background-color: ${prosp => prosp.theme.colors.tertiary};

    border-radius: 0.43rem;

    display: flex;
`;

const SideLeft = styled.aside`    
    padding: 1.87rem 1.25rem;
`;

const Title = styled.h2`
    margin-bottom: 1.25rem;
`;

const LegendContainer = styled.ul`
    list-style: none;
    
    padding-right: 1.2rem;

    height: 8.7rem;
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

    width: 2.5rem;
    height: 2.5rem;

    border-radius: 0.31rem;
    line-height: 2.5rem;

    font-size: 1.1rem;
    text-align: center;
`;

const Description = styled.h4`
    margin-left: 0.7rem;
`;

const SideRigth = styled.main`   
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