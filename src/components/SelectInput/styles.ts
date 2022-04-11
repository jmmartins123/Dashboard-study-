import styled from "styled-components";

const Container = styled.div`

    > select{
        padding: 0.43rem 0.62rem;
        border-radius: 0.31rem;
    }       

    @media(max-width: 600px){
        display: flex;  
        
        margin-right: 0.7rem;
    }
`;

export {
    Container
}