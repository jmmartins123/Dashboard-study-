import styled from "styled-components";

interface ITagProps{
    color: string;
}

const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    
    list-style: none;
    border-radius: 0.7rem;
    margin: 0.8rem 0;
    padding: 0.8rem 0.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    position: relative;

    &:hover{
        opacity: 0.8;
        transform: translateX(0.8rem);        
    }   

`;

const Tag = styled.div<ITagProps>`
    position: absolute;
    width: 0.7rem;
    height: 2rem;    
    left: 0;

    background-color: ${props => props.color};
`;

const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    margin-left: 0.4rem;
`;

const SpanTitle = styled.span`
    color: ${props => props.theme.colors.white};
    font-weight: bold;
`;

const SpanSubtitle = styled.small`
    color: ${props => props.theme.colors.white};
`;

const ValueReal = styled.h3`
    color: ${props => props.theme.colors.white};
`;


export {
    Container,
    Tag,
    ContentCard,
    SpanTitle,
    SpanSubtitle,
    ValueReal
}