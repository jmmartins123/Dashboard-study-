import styled from "styled-components";

interface ITitleContainer{
    liColor: string;
}

const Container = styled.div`
    width: 100%;     
    
    display: flex;
    justify-content: space-between;   
    margin-bottom: 1.8rem; 
   
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
    gap: 0.4rem;    
    justify-content: center;
    align-items: center;
`;

export {
    Container,
    TitleContainer,
    Controllers
}