import styled, { keyframes } from "styled-components";

interface IContainerProps{
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{     
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

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

    animation: ${animate} .5s;
  
    @media(max-width: 420px){
        width: 100%;
    }
`;

const Title = styled.span`    
    font-size: 1.20rem;
    font-weight: 500;

    @media(max-width: 770px){
        font-size: 0.87rem;
    }
`;

const Money = styled.h1`
    @media(max-width: 770px){
        word-wrap: break-word;
        font-size: 1.37rem;
    }

    @media(max-width: 420px){
        display: flex;        
    }
`;

const Prefixed = styled.strong`
    @media(max-width: 770px){
        width: 100%;
        display: inline-block;
        font-size: 1rem;
    }

    @media(max-width: 420px){
        position: initial;
        width: auto;
        font-size: 1.37rem;        
    }

   ::after{
       content: '';
       width: 0.31rem;       
       position: inline-block;
   }
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
    Prefixed,
    Small,
    Image
}