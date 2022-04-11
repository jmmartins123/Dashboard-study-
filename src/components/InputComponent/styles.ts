import styled from 'styled-components';

const Container = styled.input`
    width: 100%;

    margin: 0.3rem 0;    
    padding: 0.8rem;
    margin-top: 1.5rem;

    border-radius: 5px;

    background-color: ${props => props.theme.colors.white}
`;

export { Container }