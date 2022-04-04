import styled from "styled-components";

const Container = styled.div`
    width: 48%;
    height: 14.25rem;

    background-color: ${prosp => prosp.theme.colors.tertiary};
    color: ${prosp => prosp.theme.colors.white};

    border-radius: 0.43rem;

    margin: 0.6rem 0rem;
    padding: 1.8rem 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Header = styled.header``;

const Title = styled.h1``;

const Image = styled.img`
    width: 2.18rem;
    margin-left: 0.8rem;
`;

const Text = styled.p`
    font-size: 1.1rem;    
`;

const Footer = styled.footer`
    font-weight: 300;
`;



export {
    Container,
    Header,
    Title,
    Image,
    Text,
    Footer,    
}