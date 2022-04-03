import styled from "styled-components";

interface IContainerProps{
    color: string;
}

const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color}
`;

const Title = styled.span``;

const Amount = styled.h1``;

const Small = styled.small``;

const Image = styled.img``;

export {
    Container,
    Title,
    Amount,
    Small,
    Image
}