import styled from "styled-components";

interface IContainerProps{
    color: string;
}

const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    width: 32%;
    height: 12rem;
    
    margin: 0.8rem 0rem;
    padding: 0.7rem 1.25rem;

    border-radius: 0.4rem;

    position: relative;

    overflow: hidden;    
`;

const Title = styled.span`    
    font-size: 1.20rem;
    font-weight: 500;
`;

const Money = styled.h1`
 
`;

const Small = styled.small`
    font-size: 0.6rem;
    position: absolute;

    bottom: 0.6rem;
`;

const Image = styled.img`
    position: absolute;

    height: 110%;

    right: -1.87rem;
    top: -0.6rem;
       
    opacity: .4;
`;

export {
    Container,
    Title,
    Money,
    Small,
    Image
}