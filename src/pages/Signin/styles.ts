import styled from "styled-components";

const Container = styled.div`
    height: 100vh;

    display: flex;
    flex: 1;    
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.primary};    

`;

const Header = styled.div`     
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 1.87rem;
`;

const Logo = styled.img`        
`;


const Title = styled.h2`  
    color: ${props => props.theme.colors.white};    
`;

const Form = styled.form`  
    width: 300px;
    height: 350px;

    padding: 1.87rem;

    border-radius: 0.7rem;

    background-color: ${props => props.theme.colors.tertiary};          
`;

const FormTitle = styled.h1`  
    color: ${props => props.theme.colors.white}; 

    ::after{
        content: '';
        display: block;
        width: 3.5rem;        
        border-bottom: 0.6rem solid ${props => props.theme.colors.warning};           
    }
`;
const InputContainer = styled.div`
    
`;

export { 
    Container, 
    Header, 
    Logo, 
    Title,
    Form,
    FormTitle,
    InputContainer
}