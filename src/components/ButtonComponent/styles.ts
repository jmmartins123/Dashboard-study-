import styled from "styled-components";

const Button = styled.button`
    width: 100%;

    margin: 0.45rem 0;
    padding: 1.1rem;

    border-radius: 0.4rem;

    font-weight: bolder;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.warning};

    transition: opacity .3s;

    :hover{
        opacity: .7;
    }
`;

export {
    Button
}