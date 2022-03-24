import styled from "styled-components";

const Container = styled.div`
    .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track{
        background: ${props => props.theme.colors.info};
        opacity: 1;
    }

    .MuiSwitch-switchBase.Mui-checked{
        color: ${props => props.theme.colors.white};
    }

    .MuiSwitch-track{
        background: ${props => props.theme.colors.warning};
        opacity: 1;
    }
`;

const ToggleLabel = styled.span`

`;

export {
    Container,
    ToggleLabel
}