import styled, {keyframes} from "styled-components";

const animate = keyframes`
    0%{
        transform: translateX(-100px);
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

    background-color: ${prosp => prosp.theme.colors.tertiary};
    color: ${prosp => prosp.theme.colors.white};

    border-radius: 0.43rem;

    margin: 0.6rem 0rem;
    padding: 1.8rem 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: ${animate} 0.5s;
    
    @media(max-width: 770px){
        width: 100%;        
        height: auto;
    };
   
`;

const Header = styled.header`
   
`;

const Title = styled.h1`
    @media(max-width: 770px){
     font-size: 1.5rem;     
    }
`;

const Image = styled.img`
    width: 2.18rem;
    margin-left: 0.8rem;

    @media(max-width: 770px){
     height: 1.25rem;
     width: 1.25rem;
    }
`;

const Text = styled.p`
    font-size: 1.1rem;  
    
    @media(max-width: 770px){
        font-size: 0.87rem;
        margin-top: 2rem;            
    }   

    @media(max-width: 420px){
        margin-bottom: 1rem;
    }
`;

const Footer = styled.footer`
     @media(max-width: 770px){
        font-size: 0.87rem;  
        margin-top: 1rem;        
    }
`;



export {
    Container,
    Header,
    Title,
    Image,
    Text,
    Footer,    
}