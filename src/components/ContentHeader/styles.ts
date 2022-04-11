import styled from "styled-components";

interface ITitleContainer{
    liColor: string;
}

const Container = styled.div`
    width: 100%;     
    
    display: flex;
    justify-content: space-between;   
    
    margin-bottom: 1.8rem; 

    @media(max-width: 600px){
        display: block;                   
    }
`;

const TitleContainer = styled.div<ITitleContainer>`
     >h1{
        color: ${props => props.theme.colors.white};

        &::after{
            content: '';            
            display: block;

            width: 3.43rem;

            border-bottom: 0.6rem solid ${props => props.liColor};
        }
    }
`;

const Controllers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem; 
    
    @media(max-width: 600px){
        display: flex;        
        margin-top: 2rem;  
                
        justify-content: left;
    }
`;

export {
    Container,
    TitleContainer,
    Controllers
}